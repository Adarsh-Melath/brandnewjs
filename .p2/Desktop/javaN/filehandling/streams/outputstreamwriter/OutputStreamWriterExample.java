import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

public class OutputStreamWriterExample {
    public static void main(String[] args) {
        try {
            OutputStreamWriter osw = new OutputStreamWriter(
                    new FileOutputStream("filehandling\\streams\\outputstreamwriter\\example.txt"));
            osw.write("Hey this an example for Output stream Writer");
            osw.flush();
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
