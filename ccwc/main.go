package main

import (
	"bytes"
	"flag"
	"fmt"
	"io"
	"os"
	"strings"
)

func readFile(path string) (fileBytes []byte, err error) {
	_fileBytes, err := os.ReadFile("./" + path)
	if err != nil {
		return nil, err
	}
	return _fileBytes, nil
}

func getByteLength(bytes []byte) (byteLength int) {
	return len(bytes)
}

func lineCounter(input string) (int, error) {
	r := strings.NewReader(input)
	buf := make([]byte, 32*1024)
	count := 0
	lineSep := []byte{'\n'}

	for {
		c, err := r.Read(buf)
		count += bytes.Count(buf[:c], lineSep)

		switch {
		case err == io.EOF:
			return count, nil

		case err != nil:
			return count, err
		}
	}
}

func countBytes(filePath string) int {
	bytes, err := readFile(filePath)
	if err != nil {
		fmt.Println(err)
	}

	return getByteLength(bytes)
}

func countLines(filePath string) int {
	bytes, err := readFile(filePath)
	if err != nil {
		fmt.Println(err)
	}

	lines, err := lineCounter(string(bytes))
	return lines
}

func main() {

	countBytesPtr := flag.Bool("c", false, "a bool")
	countLinesPtr := flag.Bool("l", false, "a bool")
	countWordsPtr := flag.Bool("w", false, "a bool")

	argsWithoutProg := os.Args[1:]
	flag.Parse()
	filePath := argsWithoutProg[1]

	if *countBytesPtr {
		bytes := countBytes(filePath)
		fmt.Println(bytes, filePath)
		return
	}

	if *countLinesPtr {
		lines := countLines(filePath)
		fmt.Println(lines, filePath)
		return
	}

	if *countWordsPtr {

		bytes, err := readFile(filePath)
		if err != nil {
			fmt.Println(err)
		}
		fmt.Println(len(strings.Fields(string(bytes))), filePath)

	}

}
