package com.samples;

import java.util.Scanner;

public class ArmstrongNumber {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter input number: ");

		int input = sc.nextInt();
		int t = input;
		if(input > 0) {
			int res = 0;
			int len = String.valueOf(input).length();
			while(input > 0) {
				
				int temp = input%10;
				
				res += Math.pow(temp, len);
				
				input /= 10;
			}
			System.out.println(res);
			System.out.println("Is given number armstrong: "+(res == t));
		}else {
			System.out.println("input must be positive integer.");
		}
		
		sc.close();
	}

}
