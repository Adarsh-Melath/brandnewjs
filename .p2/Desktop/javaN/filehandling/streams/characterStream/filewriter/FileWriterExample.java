import java.io.FileWriter;
import java.io.IOException;

public class FileWriterExample {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("filehandling\\streams\\characterStream\\filewriter\\example.txt", true);
            // writing string to a file
            // fw.write("Hey I am Adarsh");

            // writing an array of characters to a file
            char[] ch = { 'j', 'a', 'v', 'a' };
            fw.write(ch);

            fw.close();
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
