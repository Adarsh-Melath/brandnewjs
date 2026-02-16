import java.io.FileWriter;
import java.io.IOException;

public class FileWriterExample {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("filehandling\\streams\\characterStream\\filewriter\\example.txt", true);
            fw.write("Hey I am Adarsh");
            fw.close();
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
