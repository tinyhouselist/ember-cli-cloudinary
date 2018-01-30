import Ember from 'ember';

const CloudinaryImageComponent = Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'width', 'height', 'alt'],

  width: Ember.computed.alias('options.width'),
  height: Ember.computed.alias('options.height'),

  src: Ember.computed('publicId', 'width', 'height', function() {
    return Ember.$.cloudinary.url(this.get('publicId'), this.get('options'));
  })
});

CloudinaryImageComponent.reopenClass({
  positionalParams: ['publicId', 'options']
});

export default CloudinaryImageComponent;
