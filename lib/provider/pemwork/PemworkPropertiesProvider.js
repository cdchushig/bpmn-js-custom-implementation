'use strict';


var inherits = require('inherits'),
    PropertiesActivator = require('bpmn-js-properties-panel/lib/PropertiesActivator');

// bpmn properties
var processProps = require('./parts/ProcessProps'),
    eventProps = require('./parts/EventProps');
    //linkProps = require('../bpmn/parts/LinkProps'),
    //documentationProps = require('../bpmn/parts/DocumentationProps'),

function createGeneralTabGroups(element, bpmnFactory, elementRegistry) {

    var generalGroup = {
      id: 'general',
      label: 'General',
      entries: []
    };
    processProps(generalGroup, element);

    eventProps(generalGroup, element, bpmnFactory);

    return[
      generalGroup
    ];
}

// Pemwork Properties Provider /////////////////////////////////////
function PemworkPropertiesProvider(eventBus, bpmnFactory, elementRegistry) {

  PropertiesActivator.call(this, eventBus);

  this.getTabs = function(element) {

    var generalTab = {
      id: 'general',
      label: 'General',
      groups: createGeneralTabGroups(element, bpmnFactory, elementRegistry)
    };

    /*var variablesTab = {
      id: 'variables',
      label: 'Process variables',
      groups: createVariablesTabGroups(element, bpmnFactory, elementRegistry)
    };

    var formsTab = {
      id: 'forms',
      label: 'Forms',
      groups: createFormsTabGroups(element, bpmnFactory, elementRegistry)
  };*/

    return [
      generalTab,
      //variablesTab,
      //formsTab
    ];
  };

}


inherits(PemworkPropertiesProvider, PropertiesActivator);

module.exports = PemworkPropertiesProvider;