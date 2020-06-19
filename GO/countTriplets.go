package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strconv"
    "strings"
)
func printSlice(s [3]int) {
    fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
// Complete the countTriplets function below.
func countTriplets(arr []int64, r int64) int64 {
    var numbers = make(map[int][]int64)
    var triplets = make(map[int]bool)
    var count int64 = 0
    for i := 0; i < len(arr); i++ {
        num := int(arr[i])
        numbers[num] = append(numbers[num],arr[i])
    }
    if r == 1{
        return int64((len(arr)*(len(arr)-1)*(len(arr)-2))/6)
    }
    for i := 0; i < len(arr); i++ {
        num := arr[i]
        val := num/r
        val2 := val/r;
        if len(numbers[int(val)]) != 0 && len(numbers[int(val2)]) != 0 {
            triplets[int(val2)] = true; 
        }
    }
    for key, _ := range triplets {
        count1 := len(numbers[key])
        count2 := len(numbers[key*int(r)])
        count3 := len(numbers[key*int(r)*int(r)])
        tripletCount := int64(count1*count2*count3);
        count += tripletCount;
    }
    return count;
}

func factorial(x int) int64 {
    if x == 0 {
        return 1
    }
    return int64(x) * factorial(x-1)
}

func main() {
    reader := bufio.NewReaderSize(os.Stdin, 16 * 1024 * 1024)

    stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
    checkError(err)

    defer stdout.Close()

    writer := bufio.NewWriterSize(stdout, 16 * 1024 * 1024)

    nr := strings.Split(strings.TrimSpace(readLine(reader)), " ")

    nTemp, err := strconv.ParseInt(nr[0], 10, 64)
    checkError(err)
    n := int32(nTemp)

    r, err := strconv.ParseInt(nr[1], 10, 64)
    checkError(err)

    arrTemp := strings.Split(strings.TrimSpace(readLine(reader)), " ")

    var arr []int64

    for i := 0; i < int(n); i++ {
        arrItem, err := strconv.ParseInt(arrTemp[i], 10, 64)
        checkError(err)
        arr = append(arr, arrItem)
    }

    ans := countTriplets(arr, r)

    fmt.Fprintf(writer, "%d\n", ans)

    writer.Flush()
}

func readLine(reader *bufio.Reader) string {
    str, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""
    }

    return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
    if err != nil {
        panic(err)
    }
}

