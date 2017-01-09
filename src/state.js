import _state from './data';
var state = JSON.parse(JSON.stringify(_state));
var cbArray = []

const cloneState = () => JSON.parse(JSON.stringify(state));

const invokeCbArray = (state) => {
    cbArray.forEach((cb) => cb(state));
}

export default {
    set (path, data){
        var pathKeyArray;
        var cursor;

        if(arguments.length === 1){
            state = JSON.parse(JSON.stringify(path))
            invokeCbArray(state);
            return;
        }

        pathKeyArray = path.split('.');
        state = cloneState();
        cursor = state;

        pathKeyArray.forEach(function(key, i){
            if(typeof cursor[key] === 'undefined'){
                cursor[key] = {};
            }
            if(i === pathKeyArray.length - 1){
                cursor[key] = data;
            } else{
                cursor = cursor[key];
            }
        });

        invokeCbArray(state);
    },

    get (path){
        return cloneState();
    },

    onChange(cb) {
        cbArray.push(cb);
    },
    offChange(cb){
        cbArray.splice(cbArray.indexOf(cb), 1);
    }
}