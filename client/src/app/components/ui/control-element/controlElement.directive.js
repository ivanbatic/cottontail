/**
 * Created by Maya on 5.8.15.
 */

class ControlElementDirective {
	constructor () {
		this.restrict = 'E';
		this.transclude = true;
		this.bindToController = true;
		this.replace = true;
	}
}

export default ControlElementDirective;