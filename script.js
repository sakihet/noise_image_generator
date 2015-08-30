'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

{
  (function () {
    var VERSION = '0.0.0';
    var $ = function $(id) {
      return document.getElementById(id);
    };

    var NoiseImageGenerator = (function () {
      function NoiseImageGenerator(color, threshold, width, height, saveButton, canvas) {
        var _this = this;

        _classCallCheck(this, NoiseImageGenerator);

        this.canvas = canvas;
        var params = [this.color = color, this.threshold = threshold, this.width = width, this.height = height];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;

            p.addEventListener('change', function (e) {
              _this.resize(_this.width, _this.height);
              _this.draw();
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        saveButton.addEventListener('click', function (e) {
          _this.save();
        });
      }

      _createClass(NoiseImageGenerator, [{
        key: 'draw',
        value: function draw() {
          console.log('draw');
        }
      }, {
        key: 'resize',
        value: function resize() {
          console.log('resize');
        }
      }, {
        key: 'save',
        value: function save() {
          console.log('save');
          window.open(this.cv);
        }
      }]);

      return NoiseImageGenerator;
    })();

    window.onload = function () {
      new NoiseImageGenerator($('color'), $('threshold'), $('width'), $('height'), $('saveButton'), $('canvas'));
      $('VERSION').innerHTML = ' v' + VERSION;
    };
  })();
}
