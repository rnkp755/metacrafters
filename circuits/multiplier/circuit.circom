pragma circom 2.0.0;

/*This circuit template checks that c is the multiplication of a and b.*/  

template Multiplier2 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b; 

   // Intermediate signal from gates
   signal x;
   signal y;

   // Final output signal
   signal output q;

   //Components used in the circuit
   component andGate = AND();
   component notGate = NOT();
   component orGate = OR();

   //Circuit Logic 
   andGate.a <== a;
   andGate.b <== b;
   
   notGate.in <== b;

   x <== andGate.out;
   y <== notGate.out;

   orGate.a <== x;
   orGate.b <== y;

   q <== orGate.out;


}

template AND() {
    signal input a;
    signal input b;
    signal output out;

    out <== a*b;
}

template OR() {
    signal input a;
    signal input b;
    signal output out;

    out <== a + b - a*b;
}

template NOT() {
    signal input in;
    signal output out;

    out <== 1 + in - 2*in;
}

component main = Multiplier2();