/**
* Js API definition
* @author: Moses Besong Besong
* @email: mosbesong@gmail.com
* @link: 
*/
var SimpleModal = function(element)
{
	var _element =  element;

	function show(element)
	{
		var inline_class = _element.getAttribute('class');
		inline_class = inline_class.replace('  ', ' ');
		inline_class = inline_class.split(' ');
		
		if (inline_class.indexOf('active') === -1){
			inline_class.push('active');
		}

		inline_class = inline_class.join(' ');

		_element.setAttribute('class', inline_class);
	}

	function hide()
	{
		var inline_class = _element.getAttribute('class');
		inline_class = inline_class.replace('active', '');
		_element.setAttribute('class', inline_class);
	}

	return {
		show: show,
		hide: hide
	};
}

document.querySelector('.simple-modal-close').addEventListener('click', function(){
	(function(element){
		var modal = SimpleModal(element.parentNode.parentNode);
		modal.hide();
	})(this)
});

document.querySelector('.simple-modal-trigger').addEventListener('click', function(){
	var target = document.querySelector('#' + this.getAttribute('simple-modal-target'));
	(function(element){
		var modal = SimpleModal(element);
		modal.show();
	})(target)
});
