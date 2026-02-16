import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class InputStreamReaderExample {
    public static void main(String[] args) {
        try {
            InputStreamReader isr = new InputStreamReader(
                    new FileInputStream("filehandling\\streams\\inputstreamreader\\example.txt"));
            int data;
            while ((data = isr.read()) != -1) {
                System.out.print((char) data);
            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
