import java.util.ArrayList;
import java.util.List;

public class Student {
    private String name;
    private int[] scores;

    public Student(String name, int[] scores) {
        this.name = name;
        this.scores = scores;
    }

    public double getAverage() {
        int sum = 0;
        for (int score : scores) {
            sum += score;
        }
        return Math.round((double) sum / scores.length * 10) / 10.0;
    }

    public String getGrade() {
        double avg = getAverage();
        if (avg >= 90) return "A";
        else if (avg >= 80) return "B";
        else if (avg >= 70) return "C";
        else if (avg >= 60) return "D";
        else return "F";
    }

    public String getName() {
        return name;
    }

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("김철수", new int[]{95, 88, 92}));
        students.add(new Student("이영희", new int[]{75, 68, 72}));
        students.add(new Student("박민준", new int[]{85, 90, 80}));

        students.stream()
                .filter(s -> s.getAverage() >= 80)
                .forEach(s -> System.out.printf("이름: %s, 평균: %.1f, 등급: %s%n",
                        s.getName(), s.getAverage(), s.getGrade()));
    }
}
