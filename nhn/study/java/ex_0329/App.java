package study.java.ex_0329;

import java.io.IOException;
import java.net.ServerSocket;

public class App {
    public static void main(String[] args) throws IOException {
        System.out.println("Hello World!");
        try (ServerSocket serverSocket = new ServerSocket(8888)) {
            System.out.println("클라이언트가 연결되었습니다.");
        }
    }
}
