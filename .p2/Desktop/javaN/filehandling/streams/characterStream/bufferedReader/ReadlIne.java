import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.FileWriter;

public class ReadlIne {
    public static void main(String[] args) {
        try {
            BufferedReader br = new BufferedReader(new FileReader(
                    "C:\\Users\\adras\\.p2\\Desktop\\javaN\\filehandling\\streams\\characterStream\\bufferedReader\\example.txt") {
            });
            PrintWriter pw = new PrintWriter(
                    new FileWriter(
                            "C:\\Users\\adras\\.p2\\Desktop\\javaN\\filehandling\\streams\\characterStream\\bufferedReader\\destination.txt"));
            String line;
            while ((line = br.readLine()) != null) {
                pw.println(line);
            }

            br.close();
            pw.close();

        } catch (IOException e) {
            System.out.println("Error occured while reading " + e);
            e.printStackTrace();
        }
    }
}
