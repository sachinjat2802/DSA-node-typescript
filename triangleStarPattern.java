/**
 * The NumberPattern class prints a square pattern of numbers from 1 to 4.
 */
class TriangleStarPattern {
    public static void main(String[] args) {
        int raw = 5;
        int column =5;
        String s ="";
        for (int i = 1; i <= raw; i++) {
            for (int j =1; j<= column; j++) {
                if(i>j)
                s +="*";
            }
            s+="\n";
        }
        System.out.println(s);
   }
}