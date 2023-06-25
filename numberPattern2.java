/**
 * The NumberPattern2 class prints a pattern of numbers in descending order for a given number of rows
 * and columns.
 */
class NumberPattern2 {
    public static void main(String[] args) {
        int raw = 4;
        int column =4;
        String s ="";
        for (int i = 1; i <= raw; i++) {
            for (int j =column; j >= 1; j--){
                s +=j;
            }
            s+="\n";
        }
        System.out.println(s);
   }
}