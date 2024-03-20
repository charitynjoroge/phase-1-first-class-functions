function receivesAFunction(callback,name){
    callback(name)
}
receivesAFunction(name, "spy")

function returnsANamedFunction(){
    return (funcType) = funcType => console.log('i am hungry');
}

function returnsAnAnonymousFunction(){
    return () => console.log('i am eating');
} 