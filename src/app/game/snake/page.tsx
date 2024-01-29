"use client"

import { useEffect } from "react"
import FirstSnake from "./lib/first.class";

export default function game1() {
    useEffect(() => {
        const snake = new FirstSnake();
        snake.start();
        return () => {
            snake.destory();
        }
    }, [])

    return <>
        <div id="csContainer"></div>
    </>
}   