package com.samples;

import java.util.Scanner;

public class FactorialNumber {
	
	public static int fact(int num) {
		int result;
		if(num == 1) return 1;
		result = fact(num-1)*num;
		return result;
	}
	

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter number:");
		int num = sc.nextInt();
		System.out.println("Use recurrsion?");
		String useRec = sc.next();
		int result = 1;
		if(useRec.equalsIgnoreCase("yes")) {
			System.out.println("----Recurssive method----");
			result = fact(num);
		}else {
			System.out.println("----Iterative method----");
			for(int i = num;i>1;i--) {
				result *=i;
			}
		}
		System.out.println(result);
		sc.close();
	}

}
