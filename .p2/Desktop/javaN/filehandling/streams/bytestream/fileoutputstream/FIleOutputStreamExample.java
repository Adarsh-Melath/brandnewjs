import java.io.FileOutputStream;
import java.io.IOException;

public class FIleOutputStreamExample {
    public static void main(String[] args) {

        try {
            FileOutputStream fos = new FileOutputStream(
                    "filehandling\\streams\\bytestream\\fileoutputstream\\example.txt");

            byte[] bytes = "Hello  World".getBytes();
            fos.write(bytes);
            for (byte b : bytes) {
                System.out.println(b);
            }
            fos.close();
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
