export default class Snake {
    // 记录旧时间
    private lastTime: number = Date.now();
    // 地图边界值
    protected boundary: boundary = {
        width: 0,
        height: 0
    }
    // 奖励坐标
    protected reward: coordinate = {
        x: 0,
        y: 0
    }
    // 蛇头坐标
    protected snakeHeadCoordinate: coordinate = {
        x: 0,
        y: 0
    };
    // 蛇头移动方向
    protected arrow: string = "";
    // 记录蛇头位置
    protected logSnakeHead: coordinate[] = [];
    // canvas 上下文
    protected ctx: CanvasRenderingContext2D | null = null;
    // 蛇身长度
    protected snakeLen: number = 10;
    // 蛇的移动频率 1-10
    protected speed: number = 3;
    // 地图边界与浏览器可视距离的偏差值
    protected boundaryOffest: number = 5;

    constructor() { }

    // 主函数
    public start(): void {
        this.initFunc();
        this.keyboardControl();
        this.randomReward();
        this.mainFunc();
    }

    // 初始化 canvas画布 上下文 并设置地图边界及初始化蛇头
    protected initFunc(): void {
        const container = document.getElementById("csContainer") as HTMLElement;
        container.style.width = "100%";
        container.style.height = "100%";
        const canvas = document.createElement("canvas") as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 5;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.boundary.width = window.innerWidth - this.boundaryOffest * 2;
        this.boundary.height = window.innerHeight - this.boundaryOffest * 2;
        this.ctx.fillRect(this.boundaryOffest, this.boundaryOffest, this.boundary.width, this.boundary.height);
        container.appendChild(canvas);
        this.snakeHeadCoordinate = { x: this.boundary.width / 2, y: this.boundary.height / 2 }
        this.logSnakeHead = [{ ...this.snakeHeadCoordinate }]
    }

    // 键盘控制器监听
    protected keyboardControl(): void {
        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp" && this.arrow !== "ArrowUp" && this.arrow !== "ArrowDown") { // 向上
                this.snakeHeadCoordinate.y -= this.speed;
                this.arrow = "ArrowUp"
            }
            if (event.key === "ArrowDown" && this.arrow !== "ArrowDown" && this.arrow !== "ArrowUp") { //向下
                this.snakeHeadCoordinate.y += this.speed;
                this.arrow = "ArrowDown"
            }
            if (event.key === "ArrowLeft" && this.arrow !== "ArrowLeft" && this.arrow !== "ArrowRight") { // 向左
                this.snakeHeadCoordinate.x -= this.speed;
                this.arrow = "ArrowLeft"
            }
            if (event.key === "ArrowRight" && this.arrow !== "ArrowRight" && this.arrow !== "ArrowLeft") { //向右
                this.snakeHeadCoordinate.x += this.speed;
                this.arrow = "ArrowRight"
            }
        })
    }

    // 计算蛇的运动轨迹 初始化奖励位置 边界检测
    protected mainFunc(): void {
        const main = (): void => {
            this.clearCanvas();
            this.snakeRunDirection();
            this.diffRun(() => this.logSnake(), Math.trunc(100 / this.speed));
            this.renderReward();
            this.renderSnake();
            this.rewardBoundary();
            let animationId: number = requestAnimationFrame(main);
            this.judgeBoundary(animationId);
        }
        main();
    }

    // 记录蛇头坐标位置
    protected logSnake(): void {
        if (this.arrow != "") {
            this.logSnakeHead.push({ ...this.snakeHeadCoordinate })
        }
        if (this.logSnakeHead.length > this.snakeLen && this.arrow != "") {
            this.logSnakeHead.shift();
        }
    }

    // 渲染蛇头和蛇身
    protected renderSnake(): void {
        this.logSnakeHead.forEach(item => {
            this.ctx!.beginPath();
            this.ctx!.arc(item.x, item.y, 10, 0, 2 * Math.PI);
            this.ctx!.fillStyle = "#FF0000";
            this.ctx!.fill();
            this.ctx!.stroke();
        });
        this.ctx!.beginPath();
        this.ctx!.arc(this.snakeHeadCoordinate.x, this.snakeHeadCoordinate.y, 10, 0, 2 * Math.PI);
        this.ctx!.fillStyle = "#FF0000";
        this.ctx!.fill();
        this.ctx!.stroke();
    }

    // 清空画布并初始化画布
    protected clearCanvas(): void {
        this.ctx!.clearRect(this.boundaryOffest, this.boundaryOffest, this.boundary.width, this.boundary.height);
        this.ctx!.save();
        this.ctx!.fillStyle = "#000000";
        this.ctx!.fill();
        this.ctx!.fillRect(this.boundaryOffest, this.boundaryOffest, this.boundary.width, this.boundary.height);
    }

    // 延迟执行函数
    protected diffRun(cb: Function, diffTime: number): void {
        let nowTime: number = Date.now();
        if (nowTime - this.lastTime > diffTime) {
            this.lastTime = nowTime;
            cb();
        }
    }

    // 蛇的持续运动轨迹
    protected snakeRunDirection(): void {
        switch (this.arrow) {
            case "ArrowUp":
                this.snakeHeadCoordinate.y -= this.speed;
                break;
            case "ArrowDown":
                this.snakeHeadCoordinate.y += this.speed;
                break;
            case "ArrowLeft":
                this.snakeHeadCoordinate.x -= this.speed;
                break;
            case "ArrowRight":
                this.snakeHeadCoordinate.x += this.speed;
                break;
        }
    }

    // 地图边界检测
    protected judgeBoundary(animationId: number): void {
        if (this.snakeHeadCoordinate.x + 5 + this.speed > this.boundary.width) {
            cancelAnimationFrame(animationId);
            return;
        }
        if (this.snakeHeadCoordinate.y + 5 + this.speed > this.boundary.height) {
            cancelAnimationFrame(animationId);
            return;
        }
        if (this.snakeHeadCoordinate.x - 5 - this.speed < 10) {
            cancelAnimationFrame(animationId);
            return;
        }
        if (this.snakeHeadCoordinate.y - 5 - this.speed < 10) {
            cancelAnimationFrame(animationId);
            return;
        }
    }

    // 根据地图边界生成随机数
    protected randomNum(val: number): number | Function {
        let res: number = Math.random() * val;
        if (res < val - this.boundaryOffest && this.boundaryOffest + 5 + this.speed < res) return res;
        return this.randomNum(val);
    }

    // 生成奖励的随机位置
    protected randomReward(): void {
        let x: number = this.randomNum(this.boundary.width) as number;
        let y: number = this.randomNum(this.boundary.height) as number;
        this.reward.x = x;
        this.reward.y = y;
    }

    // 渲染奖励位置
    protected renderReward(): void {
        this.ctx!.beginPath();
        this.ctx!.fillStyle = "#FF0000";
        this.ctx!.fillRect(this.reward.x, this.reward.y, 10, 10);
    }

    // 蛇头碰撞奖励时奖励范围的边界检测
    protected rewardBoundary(): void {
        if (this.reward.x - 10 < this.snakeHeadCoordinate.x && this.snakeHeadCoordinate.x < this.reward.x + 20 && this.reward.y - 10 < this.snakeHeadCoordinate.y && this.snakeHeadCoordinate.y < this.reward.y + 20) {
            this.snakeLen += 1;
            this.randomReward();
        }
    }

    public destory(): void {
        if (document.getElementById("csContainer")) {
            document.getElementById("csContainer")!.innerHTML = "";
        }
    }
}