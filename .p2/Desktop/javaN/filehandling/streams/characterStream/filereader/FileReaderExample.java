import java.io.FileReader;
import java.io.IOException;

public class FileReaderExample {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("filehandling\\streams\\characterStream\\filereader\\example.txt");

            // reading single byte by byte
            // int i;
            // while ((i = fr.read()) != -1) {
            // System.out.print((char) i + " ");
            // }

            // reading into array
            char[] c = new char[100];
            int charsRead = fr.read(c);

            for (char character : c) {
                System.out.println(character + " ");
            }
            System.out.println("Number of chars read: " + charsRead);

            fr.close();
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
