'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

{
  (function () {
    var VERSION = '1.0.0';
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
              _this.resize(_this.width.value, _this.height.value);
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
        this.resize(this.width.value, this.height.value);
        this.draw();
      }

      _createClass(NoiseImageGenerator, [{
        key: 'draw',
        value: function draw() {
          var ctx = this.canvas.getContext('2d');
          var w = this.canvas.width;
          var h = this.canvas.height;
          ctx.clearRect(0, 0, w, h);
          ctx.fillStyle = this.color.value;
          ctx.fillRect(0, 0, w, h);
          var inputImageData = ctx.getImageData(0, 0, w, h);
          var inputData = inputImageData.data;
          var outputImageData = ctx.getImageData(0, 0, w, h);
          var outputData = outputImageData.data;
          var th = this.threshold.value;
          var num = w * h * 4;
          for (var i = 0; i < num; i = i + 4) {
            var r = this.myrand(-th, th);
            outputData[i] = inputData[i] + r;
            outputData[i + 1] = inputData[i + 1] + r;
            outputData[i + 2] = inputData[i + 2] + r;
            outputData[i + 3] = 255;
          }
          ctx.putImageData(outputImageData, 0, 0);
          return;
        }
      }, {
        key: 'resize',
        value: function resize(w, h) {
          this.canvas.width = w;
          this.canvas.height = h;
          return;
        }
      }, {
        key: 'save',
        value: function save() {
          window.open(this.canvas.toDataURL('image/png'));
          return;
        }
      }, {
        key: 'myrand',
        value: function myrand(min, max) {
          var r = Math.floor(Math.random() * (max - min) + 1);
          r += min;
          return r;
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
