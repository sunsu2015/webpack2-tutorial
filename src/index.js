/**
 * Created by sunsu on 2017/11/28.
 */
import _ from "lodash";
function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());