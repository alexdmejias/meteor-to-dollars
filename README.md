# to-dollars

Simple package that adds a `toDollars` method to the Number prototype. All the credit goes to this [SO answer](http://stackoverflow.com/a/149099)

## Usage

The first argument (Number) is the number of decimal places. The second argument (Boolean) defines whether to add a '$' to the returning string.

    (123).toDollars(2, true); // "$123.00"
    (123).toDollars(0, true); // "$123"
    (123).toDollars(0); // "123"
    (123).toDollars(2); // "123.00"

## Todo

* tests
* support cents
