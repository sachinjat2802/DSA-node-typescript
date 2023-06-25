/**
 * This Java class prints a number pattern in a 3x3 grid.
 */
class NumberPattern3 {
    public static void main(String[] args) {
        int raw = 3;
        int column =3;
        int count =0;
        String s ="";
        for (int i = 1; i <= raw; i++) {
            for (int j =1; j<= column; j++) {
                count++;
                s +=count;
            }
            s+="\n";
        }
        System.out.println(s);
   }
}