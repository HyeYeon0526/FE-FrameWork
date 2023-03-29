function print (number, string, boolean,b, a ) {
    console.log(" number " + number + "\n string " + string +"\n boolean "+ boolean + "\n object " + JSON.stringify(b) + "\n function "+ a);
}

print(1, "2", true, { age: 20 }, () => 3);