package study.java.ex_0329;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Server extends Thread {
    @Override
    public void run() {
        while (!Thread.interrupted()) {
            try (ServerSocket server = new ServerSocket()) {
                Socket socket = server.accept();
                Terminal.terminalPrint("hello");

            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }
}
