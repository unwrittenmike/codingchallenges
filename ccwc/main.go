package main

import (
	"flag"
	"fmt"
	"os"
)

func main() {
	countPtr := flag.Bool("c", false, "a bool")
	argsWithoutProg := os.Args[1:]
	flag.Parse()
	if *countPtr {
		fmt.Println(argsWithoutProg[1])
	}
}
