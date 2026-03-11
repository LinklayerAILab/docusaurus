#!/bin/bash
# 定义常量
PORT="3000"
LOG_FILE="serve.log"
usage() {
    echo "Usage: $0 {start|stop|restart}"
    exit 1
}
check_dependencies() {
    if ! command -v yarn &> /dev/null; then
        echo "Error: Yarn is not installed."
        exit 1
    fi
}
start_server() {
    echo "Starting Docusaurus server on port $PORT..."
# 检查端口是否被占用 
if lsof -i :$PORT > /dev/null; then
        echo "Warning: Port $PORT is already in use."
        echo "Please check if another process is running on this port."
        return 1
    fi
# 启动服务并捕获 PID
    yarn serve --port $PORT > $LOG_FILE 2>&1 &
    PID=$!
echo "Server started. PID: $PID"
}
stop_server() {
    # 1. 获取当前占用 3000 端口的 PID (实时查询)
    PID=$(netstat -ntlp | grep :$PORT | awk '{print $7}' | awk -F"/" '{print $1}')
if [ -z "$PID" ]; then
        echo "Server is not running (no process found on port $PORT)."
        return 0
    fi
echo "Killing process with PID: $PID..."
    kill -9 $PID || kill -SIGINT $PID
# 等待进程完全退出
    sleep 2
# 验证是否成功停止
    if ps -p $PID > /dev/null; then
        echo "Failed to stop server. Force killing..."
        kill -9 $PID
    else
        echo "Server stopped successfully."
    fi
}
case "$1" in
    start)
        check_dependencies
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        stop_server
        start_server
        ;;
    *)
        usage
        ;;
esac

