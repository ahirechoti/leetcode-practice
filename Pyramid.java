package com.samples;

import java.util.Scanner;

public class Pyramid {
	
	public static void pattern(int n, int i) {
		if(n == 0)
			return;
		print_space(n-1);
		print(i-n+1);
		System.out.println("");
		
		pattern(n-1, i);
	}
	
	private static void print_space(int i) {
		// TODO Auto-generated method stub
		if(i == 0) {
			return;
		}
		System.out.print(" ");
		print_space(i-1);
	}

	private static void print(int i) {
		if(i == 0) {
			return;
		}
		System.out.print("* ");
		print(i-1);
		
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Use recurssion: ");
		String userec = sc.next();
		System.out.println("Enter height of the pyramid");
	    int h = sc.nextInt();
	    if(userec.equalsIgnoreCase("yes")) {
	    	pattern(h,h);
	    }else {
	    	for (int i = 1; i <= h; i++) {
	  	      for (int j = 0; j < h; j++) {
	  	    	  System.out.print((j >= (h - i))? "* ": " ");//to pyramid full pyramid.
	  	    	  //System.out.print((j >= (h - i))? "*": " ");//to print left side half pyramid.
	  	    	  //System.out.print((j >= (h - i))? "* ": "");//to print right sided half pyramid with spaces.
	  	    	  //System.out.print((j >= (h - i))? "*": "");//to print right sided half pyramid with out spaces.
	  	      }

	  	      System.out.println("");

	  	    }
	    }
	    
	    sc.close();

	  }
}
