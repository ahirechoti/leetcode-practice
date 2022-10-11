package com.samples;

import java.util.Scanner;

public class Pyramid {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter height of the pyramid");
	    int h = sc.nextInt();
	    for (int i = 1; i <= h; i++) {
	      for (int j = 0; j < h; j++) {
	    	  System.out.print((j >= (h - i))? "* ": " ");//to pyramid full pyramid.
	    	  //System.out.print((j >= (h - i))? "*": " ");//to print left side half pyramid.
	    	  //System.out.print((j >= (h - i))? "* ": "");//to print right sided half pyramid with spaces.
	    	  //System.out.print((j >= (h - i))? "*": "");//to print right sided half pyramid with out spaces.
	      }

	      System.out.println("");

	    }
	    sc.close();

	  }
}
