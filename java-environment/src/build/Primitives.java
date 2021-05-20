package build;

public class Primitives {

	
	byte b = 127;
	short s = 12345;
	int i = 10000000;
	long l = 10000000000L; // use L to indicate long
	float f = 1000000.000f; //use f to indicate float
	double d = 1000000000.00;
	
	int byteAsInt = b; //byte small enough to fit into int
	//downcasting you are retaining value but changing ref so it fits
	byte intAsByte = (byte)byteAsInt;
	
	byte intAsByte = byteAsInt; //int too big to fit into a byte
	
	char c = 'a'; //characters use single quotes
	boolean bool = true;
	
}
