'use strict'

var confirm = function (message) {
	bootbox.confirm(message, function (value) {
		if (value) {
			return true;
		} else {
			return false;
		}
	});
}

ko.extenders.confirmable = function (target, options) {
    var message = options.message;
    var execute = options.execute || null;
	//create a writeable computed observable to intercept writes to our observable
	var result = ko.computed({
		read: target,  //always return the original observables value
		write: function (newValue) {
			var current = target();

			//ask for confirmation unless you don't have
			bootbox.confirm(message, function (value) {
				if (value) {
				    target(newValue);
				    if (execute) {
				        execute();
				    }
				} else {
					target.notifySubscribers(current);
				}
			});
		}
	}).extend({ notify: 'always' });

	//return the new computed observable
	return result;
};