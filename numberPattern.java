/**
 * The NumberPattern class prints a square pattern of numbers from 1 to 4.
 */
class NumberPattern {
    public static void main(String[] args) {
        int raw = 4;
        int column =4;
        String s ="";
        for (int i = 1; i <= raw; i++) {
            for (int j =1; j<= column; j++) {
                s +=j;
            }
            s+="\n";
        }
        System.out.println(s);
   }
}