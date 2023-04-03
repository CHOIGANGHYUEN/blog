package study.java.ex_0329;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;

public class Terminal {
    private static Terminal instance = new Terminal();
    private static BufferedWriter terminal = new BufferedWriter(new OutputStreamWriter(System.out));
    private BufferedWriter writer;

    private Terminal() {
    }

    public Terminal(OutputStream out) {
        writer = new BufferedWriter(new OutputStreamWriter(out));
    }

    public void print(String message) throws IOException {
        writer.write(message);
        writer.newLine();
        writer.flush();

    }

    public static void terminalPrint(String message) throws IOException {
        terminal.write(message);
        terminal.newLine();
        terminal.flush();
    }

}
