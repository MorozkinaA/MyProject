var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.frontend;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = '66C8670B3D3780FD07A59D98961861E3';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 'object', $intern_1 = 'function', $intern_2 = 'java.lang', $intern_3 = 'Accept', $intern_4 = 'application/json', $intern_5 = 'com.exampleproject.gwt.startpoint.client', $intern_6 = 'org.fusesource.restygwt.client', $intern_7 = 'width', $intern_8 = 'height', $intern_9 = 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.', $intern_10 = 'Style names cannot be empty', $intern_11 = 'com.google.gwt.user.client.ui', $intern_12 = 'mouseout', $intern_13 = {13:1, 10:1, 12:1, 11:1, 14:1, 9:1, 7:1}, $intern_14 = {13:1, 10:1, 12:1, 11:1, 19:1, 14:1, 9:1, 7:1}, $intern_15 = 'div', $intern_16 = 'popupContent', $intern_17 = {3:1}, $intern_18 = 'com.exampleproject.gwt.startpoint.client.views', $intern_19 = 'cellSpacing', $intern_20 = {72:1, 34:1}, $intern_21 = '\u0432\u0441\u0435', $intern_22 = '\u0440\u0443\u0431.', $intern_23 = 'com.exampleproject.model.shared', $intern_24 = 'surname', $intern_25 = 'description', $intern_26 = 3.141592653589793, $intern_27 = 'overflow', $intern_28 = 'com.google.gwt.animation.client', $intern_29 = 'com.google.gwt.user.client', $intern_30 = 'com.google.gwt.core.client', $intern_31 = '__noinit__', $intern_32 = '__java$exception', $intern_33 = {3:1, 4:1}, $intern_34 = 'com.google.gwt.core.client.impl', $intern_35 = 'null', $intern_36 = 'CSS1Compat', $intern_37 = {8:1, 16:1, 3:1, 6:1, 5:1}, $intern_38 = 'com.google.gwt.dom.client', $intern_39 = {16:1, 29:1, 3:1, 6:1, 5:1}, $intern_40 = {17:1, 3:1, 6:1, 5:1}, $intern_41 = 'com.google.web.bindery.event.shared', $intern_42 = 'com.google.gwt.event.shared', $intern_43 = 'com.google.gwt.event.dom.client', $intern_44 = 'com.google.gwt.event.logical.shared', $intern_45 = {45:1, 3:1, 4:1}, $intern_46 = 'UmbrellaException', $intern_47 = 'com.google.gwt.http.client', $intern_48 = 'Content-Type', $intern_49 = {24:1, 3:1, 4:1}, $intern_50 = 'com.google.gwt.json.client', $intern_51 = 'Error parsing JSON: ', $intern_52 = 'com.google.gwt.text.shared.testing', $intern_53 = 'load', $intern_54 = 32768, $intern_55 = '.call(this)}', $intern_56 = 'return function() { w.__gwt_dispatchUnhandledEvent_', $intern_57 = '__uiObjectID', $intern_58 = 'com.google.gwt.user.client.impl', $intern_59 = 'cellPadding', $intern_60 = 'Column index: ', $intern_61 = ', Column size: ', $intern_62 = 'Row index: ', $intern_63 = ', Row size: ', $intern_64 = '__gwtLastUnhandledEvent', $intern_65 = 'bidiwrapped', $intern_66 = {13:1, 10:1, 12:1, 11:1, 19:1, 14:1, 61:1, 9:1, 7:1}, $intern_67 = {30:1, 3:1, 6:1, 5:1}, $intern_68 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (', $intern_69 = ').\n', $intern_70 = 'Expect more errors.', $intern_71 = 'java.util', $intern_72 = '_gwt_modCount', $intern_73 = {31:1}, $intern_74 = 'delete', $intern_75 = 'java.util.logging';
var _, com_google_gwt_lang_Runtime_prototypesByTypeId, com_google_gwt_lang_ModuleUtils_initFnList, com_google_gwt_lang_CollapsedPropertyHolder_permutationId = -1;
function com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(propertyName, propertyValue){
  typeof window === $intern_0 && typeof window['$gwt'] === $intern_0 && (window['$gwt'][propertyName] = propertyValue);
}

function com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(errFn, modName, modBase, softPermutationId){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  $moduleName = modName;
  $moduleBase = modBase;
  com_google_gwt_lang_CollapsedPropertyHolder_permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function com_google_gwt_lang_ModuleUtils_ensureModuleInit__V(){
  com_google_gwt_lang_ModuleUtils_initFnList == null && (com_google_gwt_lang_ModuleUtils_initFnList = []);
}

function com_google_gwt_lang_ModuleUtils_addInitFunctions__V(){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function com_google_gwt_lang_Runtime_typeMarkerFn__V(){
}

function com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(object){
  if (Array.isArray(object) && object.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V) {
    return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(object)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(object) >>> 0).toString(16);
  }
  return object.toString();
}

function com_google_gwt_lang_Runtime_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function com_google_gwt_lang_Runtime_emptyMethod__V(){
}

function com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = com_google_gwt_lang_Runtime_prototypesByTypeId, com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0;
  var prototype = prototypesByTypeId[typeId];
  var clazz = prototype instanceof Array?prototype[0]:null;
  if (prototype && !clazz) {
    _ = prototype;
  }
   else {
    _ = (com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 && (com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 = com_google_gwt_lang_Runtime_prototypesByTypeId[superTypeIdOrPrototype]) , com_google_gwt_lang_Runtime_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0));
    _.java_lang_Object_castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.java_lang_Object_typeMarker = com_google_gwt_lang_Runtime_typeMarkerFn__V);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.java_lang_Object__1_1_1clazz = clazz);
}

function com_google_gwt_lang_Runtime_bootstrap__V(){
  com_google_gwt_lang_Runtime_prototypesByTypeId = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

com_google_gwt_lang_Runtime_bootstrap__V();
function java_lang_Object_Object__V(){
}

function java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.equals__Ljava_lang_Object_2Z(other):com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static === other:com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this$static, other);
}

function java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit:com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit:com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz:com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz:this$static.java_lang_Object__1_1_1clazz || Array.isArray(this$static) && com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit, 1) || com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit;
}

function java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this$static):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_Cast_round_1int__DI((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static)):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static)?1231:1237:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.hashCode__I():com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this$static):com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(1, null, {}, java_lang_Object_Object__V);
_.equals__Ljava_lang_Object_2Z = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.getClass__Ljava_lang_Class_2 = function java_lang_Object_getClass__Ljava_lang_Class_2(){
  return this.java_lang_Object__1_1_1clazz;
}
;
_.hashCode__I = function java_lang_Object_hashCode__I(){
  return javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Object_toString__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals__Ljava_lang_Object_2Z(other);
}
;
_.hashCode = function(){
  return this.hashCode__I();
}
;
_.toString = function(){
  return this.toString__Ljava_lang_String_2();
}
;
function com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  if (com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_stringCastMap[dstId];
  }
   else if (src_0.java_lang_Object_castableTypeMap) {
    return !!src_0.java_lang_Object_castableTypeMap[dstId];
  }
   else if (com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_doubleCastMap[dstId];
  }
   else if (com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_booleanCastMap[dstId];
  }
  return false;
}

function com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, dstId){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId));
  return src_0;
}

function com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0) && !(src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V));
  return src_0;
}

function com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0));
  return src_0;
}

function com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(src_0){
  return !Array.isArray(src_0) && src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return src_0 != null && com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId);
}

function com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'boolean';
}

function com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'number';
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src_0){
  return src_0 != null && com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0) && !(src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V);
}

function com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'string';
}

function com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_0 || typeof src_0 === $intern_1;
}

function com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  return src_0 == null?null:src_0;
}

function com_google_gwt_lang_Cast_round_1int__DI(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var com_google_gwt_lang_Cast_booleanCastMap, com_google_gwt_lang_Cast_doubleCastMap, com_google_gwt_lang_Cast_stringCastMap;
function java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static){
  if (this$static.java_lang_Class_typeName != null) {
    return;
  }
  java_lang_Class_initializeNames__Ljava_lang_Class_2V(this$static);
}

function java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static);
  return this$static.java_lang_Class_typeName;
}

function java_lang_Class_Class__V(){
  ++java_lang_Class_nextSequentialId;
  this.java_lang_Class_typeName = null;
  this.java_lang_Class_simpleName = null;
  this.java_lang_Class_packageName = null;
  this.java_lang_Class_compoundName = null;
  this.java_lang_Class_canonicalName = null;
  this.java_lang_Class_typeId = null;
  this.java_lang_Class_arrayLiterals = null;
}

function java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_packageName = packageName;
  clazz.java_lang_Class_compoundName = compoundClassName;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, compoundClassName, typeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  clazz.java_lang_Class_modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClass, dimensions){
  var arrayLiterals = leafClass.java_lang_Class_arrayLiterals = leafClass.java_lang_Class_arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2(dimensions));
}

function java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz){
  if (clazz.isPrimitive__Z()) {
    return null;
  }
  var typeId = clazz.java_lang_Class_typeId;
  return com_google_gwt_lang_Runtime_prototypesByTypeId[typeId];
}

function java_lang_Class_initializeNames__Ljava_lang_Class_2V(clazz){
  if (clazz.isArray__Z()) {
    var componentType = clazz.java_lang_Class_componentType;
    componentType.isPrimitive__Z()?(clazz.java_lang_Class_typeName = '[' + componentType.java_lang_Class_typeId):!componentType.isArray__Z()?(clazz.java_lang_Class_typeName = '[L' + componentType.getName__Ljava_lang_String_2() + ';'):(clazz.java_lang_Class_typeName = '[' + componentType.getName__Ljava_lang_String_2());
    clazz.java_lang_Class_canonicalName = componentType.getCanonicalName__Ljava_lang_String_2() + '[]';
    clazz.java_lang_Class_simpleName = componentType.getSimpleName__Ljava_lang_String_2() + '[]';
    return;
  }
  var packageName = clazz.java_lang_Class_packageName;
  var compoundName = clazz.java_lang_Class_compoundName;
  compoundName = compoundName.split('/');
  clazz.java_lang_Class_typeName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('$', compoundName)]);
  clazz.java_lang_Class_canonicalName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', compoundName)]);
  clazz.java_lang_Class_simpleName = compoundName[compoundName.length - 1];
}

function java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.java_lang_Class_typeId = typeId;
  var prototype = java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz);
  if (!prototype) {
    com_google_gwt_lang_Runtime_prototypesByTypeId[typeId] = [clazz];
    return;
  }
  prototype.java_lang_Object__1_1_1clazz = clazz;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(91, 1, {}, java_lang_Class_Class__V);
_.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2 = function java_lang_Class_createClassLiteralForArray__ILjava_lang_Class_2(dimensions){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_modifiers = 4;
  dimensions > 1?(clazz.java_lang_Class_componentType = java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(this, dimensions - 1)):(clazz.java_lang_Class_componentType = this);
  return clazz;
}
;
_.getCanonicalName__Ljava_lang_String_2 = function java_lang_Class_getCanonicalName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_canonicalName;
}
;
_.getName__Ljava_lang_String_2 = function java_lang_Class_getName__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this);
}
;
_.getSimpleName__Ljava_lang_String_2 = function java_lang_Class_getSimpleName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_simpleName;
}
;
_.isArray__Z = function java_lang_Class_isArray__Z(){
  return (this.java_lang_Class_modifiers & 4) != 0;
}
;
_.isPrimitive__Z = function java_lang_Class_isPrimitive__Z(){
  return (this.java_lang_Class_modifiers & 1) != 0;
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Class_toString__Ljava_lang_String_2(){
  return ((this.java_lang_Class_modifiers & 2) != 0?'interface ':(this.java_lang_Class_modifiers & 1) != 0?'':'class ') + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this) , this.java_lang_Class_typeName);
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Object', 1);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Class', 91);
function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$getResource__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static){
  var serviceRoot;
  if (!this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_resource) {
    serviceRoot = (org_fusesource_restygwt_client_Defaults_$clinit__V() , org_fusesource_restygwt_client_Defaults_$clinit__V() , org_fusesource_restygwt_client_Defaults_serviceRoot);
    this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_resource = new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V(serviceRoot);
  }
  return this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_resource;
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$isLogged__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Ljava_util_List_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static, logInfo, callback){
  var __e, __method;
  __method = org_fusesource_restygwt_client_Resource_$post__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$getResource__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static), '/login'));
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(__method.org_fusesource_restygwt_client_Method_builder, $intern_3, $intern_4);
  org_fusesource_restygwt_client_Method_$json__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_Method_2(__method, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toJSON__Ljava_util_Collection_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Lcom_google_gwt_json_client_JSONValue_2(logInfo, (org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING)));
  try {
    org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(__method, new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_WorkerClient_1Generated_1RestServiceProxy_1$2__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(__method, callback, __method));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 24)) {
      __e = $e0;
      com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(__e, __e.java_lang_Throwable_detailMessage) + '\n' + __e.java_lang_Throwable_detailMessage);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$selectBooks__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static, callback){
  var __e, __method;
  __method = org_fusesource_restygwt_client_Resource_$get__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$getResource__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static), '/books'));
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(__method.org_fusesource_restygwt_client_Method_builder, $intern_3, $intern_4);
  try {
    org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(__method, new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_WorkerClient_1Generated_1RestServiceProxy_1$4__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(__method, callback, __method));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 24)) {
      __e = $e0;
      com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(__e, __e.java_lang_Throwable_detailMessage) + '\n' + __e.java_lang_Throwable_detailMessage);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$selectGenres__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static, callback){
  var __e, __method;
  __method = org_fusesource_restygwt_client_Resource_$get__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$getResource__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static), '/genres'));
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(__method.org_fusesource_restygwt_client_Method_builder, $intern_3, $intern_4);
  try {
    org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(__method, new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_WorkerClient_1Generated_1RestServiceProxy_1$5__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(__method, callback, __method));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 24)) {
      __e = $e0;
      com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(__e, __e.java_lang_Throwable_detailMessage) + '\n' + __e.java_lang_Throwable_detailMessage);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$sortBooks__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Ljava_util_List_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static, params, callback){
  var __e, __method;
  __method = org_fusesource_restygwt_client_Resource_$post__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$getResource__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static), '/sort'));
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(__method.org_fusesource_restygwt_client_Method_builder, $intern_3, $intern_4);
  org_fusesource_restygwt_client_Method_$json__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_Method_2(__method, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toJSON__Ljava_util_Collection_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Lcom_google_gwt_json_client_JSONValue_2(params, (org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING)));
  try {
    org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(__method, new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_WorkerClient_1Generated_1RestServiceProxy_1$6__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(__method, callback, __method));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 24)) {
      __e = $e0;
      com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(__e, __e.java_lang_Throwable_detailMessage) + '\n' + __e.java_lang_Throwable_detailMessage);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_WorkerClient_1Generated_1RestServiceProxy_1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(98, 1, {}, com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_WorkerClient_1Generated_1RestServiceProxy_1__V);
_.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_resource = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1WorkerClient_11Generated_11RestServiceProxy_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'WorkerClient_Generated_RestServiceProxy_', 98);
function org_fusesource_restygwt_client_AbstractRequestCallback_$onError__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Ljava_lang_Throwable_2V(this$static, exception){
  this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, exception);
}

function org_fusesource_restygwt_client_AbstractRequestCallback_$onResponseReceived__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(this$static, response){
  var content, e, statusCode, value_0;
  this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method.org_fusesource_restygwt_client_Method_response = response;
  if (org_fusesource_restygwt_client_Method_$isExpected__Lorg_fusesource_restygwt_client_Method_2IZ(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, (statusCode = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.status , statusCode == 1223?204:statusCode))) {
    try {
      com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V));
      !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V)) , 'Received http response for request: ' + this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_httpMethod + ' ' + this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_url);
      content = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText;
      if (content != null && content.length > 0) {
        com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V));
        !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V)) , this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger);
        value_0 = this$static.parseResult__Ljava_lang_Object_2();
      }
       else {
        value_0 = null;
      }
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V));
        !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V)) , java_util_logging_Level_$clinit__V() , java_util_logging_Level_FINE);
        this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, e);
        return;
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
    this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback.onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, value_0);
  }
   else {
    this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, new org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V((org_fusesource_restygwt_client_Defaults_$clinit__V() , response)));
  }
}

function org_fusesource_restygwt_client_AbstractRequestCallback_AbstractRequestCallback__Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(method, callback){
  this.org_fusesource_restygwt_client_AbstractRequestCallback_method = method;
  this.org_fusesource_restygwt_client_AbstractRequestCallback_callback = callback;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(62, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AbstractRequestCallback', 62);
function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_2Lcom_exampleproject_model_shared_User_2(this$static){
  var __e;
  try {
    return com_exampleproject_model_shared_User_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_User_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_User_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_val$_1_1method4.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText)));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
      __e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(__e));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_WorkerClient_1Generated_1RestServiceProxy_1$2__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V($anonymous0, $anonymous1, val$__method){
  this.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_val$_1_1method4 = val$__method;
  org_fusesource_restygwt_client_AbstractRequestCallback_AbstractRequestCallback__Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V.call(this, $anonymous0, $anonymous1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(140, 62, {}, com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_WorkerClient_1Generated_1RestServiceProxy_1$2__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V);
_.parseResult__Ljava_lang_Object_2 = function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_parseResult__Ljava_lang_Object_2(){
  return com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_2Lcom_exampleproject_model_shared_User_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1WorkerClient_11Generated_11RestServiceProxy_11$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'WorkerClient_Generated_RestServiceProxy_/2', 140);
function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_2Ljava_util_List_2(this$static){
  var __e;
  try {
    return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toList__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_List_2((com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_val$_1_1method4.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText)), (com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_INSTANCE));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
      __e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(__e));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_WorkerClient_1Generated_1RestServiceProxy_1$4__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V($anonymous0, $anonymous1, val$__method){
  this.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_val$_1_1method4 = val$__method;
  org_fusesource_restygwt_client_AbstractRequestCallback_AbstractRequestCallback__Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V.call(this, $anonymous0, $anonymous1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(141, 62, {}, com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_WorkerClient_1Generated_1RestServiceProxy_1$4__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V);
_.parseResult__Ljava_lang_Object_2 = function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_parseResult__Ljava_lang_Object_2(){
  return com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$4_2Ljava_util_List_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1WorkerClient_11Generated_11RestServiceProxy_11$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'WorkerClient_Generated_RestServiceProxy_/4', 141);
function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_2Ljava_util_List_2(this$static){
  var __e;
  try {
    return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toList__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_List_2((com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_val$_1_1method4.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText)), (com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_INSTANCE));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
      __e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(__e));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_WorkerClient_1Generated_1RestServiceProxy_1$5__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V($anonymous0, $anonymous1, val$__method){
  this.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_val$_1_1method4 = val$__method;
  org_fusesource_restygwt_client_AbstractRequestCallback_AbstractRequestCallback__Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V.call(this, $anonymous0, $anonymous1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(142, 62, {}, com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_WorkerClient_1Generated_1RestServiceProxy_1$5__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V);
_.parseResult__Ljava_lang_Object_2 = function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_parseResult__Ljava_lang_Object_2(){
  return com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$5_2Ljava_util_List_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1WorkerClient_11Generated_11RestServiceProxy_11$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'WorkerClient_Generated_RestServiceProxy_/5', 142);
function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_2Ljava_util_List_2(this$static){
  var __e;
  try {
    return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toList__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_List_2((com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_val$_1_1method4.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText)), (com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_INSTANCE));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
      __e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(__e));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_WorkerClient_1Generated_1RestServiceProxy_1$6__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V($anonymous0, $anonymous1, val$__method){
  this.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_val$_1_1method4 = val$__method;
  org_fusesource_restygwt_client_AbstractRequestCallback_AbstractRequestCallback__Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V.call(this, $anonymous0, $anonymous1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(143, 62, {}, com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_WorkerClient_1Generated_1RestServiceProxy_1$6__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V);
_.parseResult__Ljava_lang_Object_2 = function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_parseResult__Ljava_lang_Object_2(){
  return com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$6_2Ljava_util_List_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1WorkerClient_11Generated_11RestServiceProxy_11$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'WorkerClient_Generated_RestServiceProxy_/6', 143);
function com_google_gwt_user_client_ui_UIObject_$replaceNode__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function com_google_gwt_user_client_ui_UIObject_$resolvePotentialElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__V);
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem);
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2IIV(this$static){
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = '150px';
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_8] = '250px';
}

function com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(elem, style, add_0){
  if (!elem) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V($intern_9));
  }
  style = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(style);
  if (style.length == 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_10));
  }
  add_0?com_google_gwt_dom_client_Element_$addClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(elem, style):com_google_gwt_dom_client_Element_$removeClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(elem, style);
}

function com_google_gwt_user_client_ui_UIObject_setStylePrimaryName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, style){
  if (!elem) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V($intern_9));
  }
  style = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(style);
  if (style.length == 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_10));
  }
  com_google_gwt_user_client_ui_UIObject_updatePrimaryAndDependentStyleNames__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, style);
}

function com_google_gwt_user_client_ui_UIObject_updatePrimaryAndDependentStyleNames__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(9, 1, {11:1, 9:1});
_.resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2 = function com_google_gwt_user_client_ui_UIObject_resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2(){
  return com_google_gwt_user_client_ui_UIObject_$resolvePotentialElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2();
}
;
_.setHeight__Ljava_lang_String_2V = function com_google_gwt_user_client_ui_UIObject_setHeight__Ljava_lang_String_2V(height){
  this.com_google_gwt_user_client_ui_UIObject_element.style[$intern_8] = height;
}
;
_.setWidth__Ljava_lang_String_2V = function com_google_gwt_user_client_ui_UIObject_setWidth__Ljava_lang_String_2V(width_0){
  this.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = width_0;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_user_client_ui_UIObject_toString__Ljava_lang_String_2(){
  if (!this.com_google_gwt_user_client_ui_UIObject_element) {
    return '(null handle)';
  }
  return this.com_google_gwt_user_client_ui_UIObject_element.outerHTML;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1UIObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'UIObject', 9);
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type_0){
  var typeInt;
  typeInt = com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(type_0.com_google_gwt_event_dom_client_DomEvent$Type_name);
  typeInt == -1?this$static.com_google_gwt_user_client_ui_UIObject_element:this$static.sinkEvents__IV(typeInt);
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type_0, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event_0);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.isAttached__Z()) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents__IV(bitsToAdd);
  this$static.doAttachChildren__V();
  this$static.onLoad__V();
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this$static, event_0){
  var related;
  switch (com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == $intern_12?event_0.toElement:event_0.fromElement);
      if (!!related && com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this$static.com_google_gwt_user_client_ui_UIObject_element, related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event_0, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.isAttached__Z()) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.onUnload__V();
  }
   finally {
    try {
      this$static.doDetachChildren__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null;
      this$static.com_google_gwt_user_client_ui_Widget_attached = false;
    }
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, this$static) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(this$static.com_google_gwt_user_client_ui_Widget_parent, 19)) {
    com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_Widget_parent, 19).remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("This widget's parent does not implement HasWidgets"));
  }
}

function com_google_gwt_user_client_ui_Widget_$replaceElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_Widget_attached && (this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null , undefined);
  !!this$static.com_google_gwt_user_client_ui_UIObject_element && com_google_gwt_user_client_ui_UIObject_$replaceNode__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, elem);
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  this$static.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent_0){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached__Z() && this$static.onDetach__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent_0;
    parent_0.isAttached__Z() && this$static.onAttach__V();
  }
}

function com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, eventBitsToAdd){
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, eventBitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= eventBitsToAdd);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(7, 9, $intern_13);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}
;
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V = function com_google_gwt_user_client_ui_Widget_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this, event_0);
}
;
_.isAttached__Z = function com_google_gwt_user_client_ui_Widget_isAttached__Z(){
  return this.com_google_gwt_user_client_ui_Widget_attached;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Widget_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Widget_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Widget_onLoad__V(){
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_Widget_onUnload__V(){
}
;
_.sinkEvents__IV = function com_google_gwt_user_client_ui_Widget_sinkEvents__IV(eventBitsToAdd){
  com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this, eventBitsToAdd);
}
;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Widget', 7);
function com_google_gwt_user_client_ui_Panel_$adopt__Lcom_google_gwt_user_client_ui_Panel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, child){
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(this$static){
  var it;
  it = new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children);
  while (it.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < it.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size) {
    com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(it);
    com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(it);
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(285, 7, $intern_14);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Panel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Panel', 285);
function com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  if (this$static.com_google_gwt_user_client_ui_SimplePanel_widget != w) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.getContainerElement__Lcom_google_gwt_user_client_Element_2(), w.com_google_gwt_user_client_ui_UIObject_element);
    this$static.com_google_gwt_user_client_ui_SimplePanel_widget = null;
  }
  return true;
}

function com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  if (w == this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    return;
  }
  !!w && com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(w);
  !!this$static.com_google_gwt_user_client_ui_SimplePanel_widget && this$static.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static.com_google_gwt_user_client_ui_SimplePanel_widget);
  this$static.com_google_gwt_user_client_ui_SimplePanel_widget = w;
  if (w) {
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.getContainerElement__Lcom_google_gwt_user_client_Element_2(), com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_SimplePanel_widget.com_google_gwt_user_client_ui_UIObject_element));
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, this$static);
  }
}

function com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, elem);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(86, 285, $intern_14);
_.getContainerElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_SimplePanel_getContainerElement__Lcom_google_gwt_user_client_Element_2(){
  return this.com_google_gwt_user_client_ui_UIObject_element;
}
;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_SimplePanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_SimplePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'SimplePanel', 86);
function com_google_gwt_user_client_ui_PopupPanel_$eventTargetsPopup__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (com_google_gwt_dom_client_Element_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(target)) {
    return com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this$static.com_google_gwt_user_client_ui_UIObject_element, target);
  }
  return false;
}

function com_google_gwt_user_client_ui_PopupPanel_$getOffsetHeight__Lcom_google_gwt_user_client_ui_PopupPanel_2I(this$static){
  return com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this$static.com_google_gwt_user_client_ui_UIObject_element, 'offsetHeight');
}

function com_google_gwt_user_client_ui_PopupPanel_$getOffsetWidth__Lcom_google_gwt_user_client_ui_PopupPanel_2I(this$static){
  return com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this$static.com_google_gwt_user_client_ui_UIObject_element, 'offsetWidth');
}

function com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2ZV(this$static){
  if (!this$static.com_google_gwt_user_client_ui_PopupPanel_showing) {
    return;
  }
  com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2ZZV(this$static.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation, false);
  com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(this$static);
}

function com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static){
  var w;
  w = this$static.com_google_gwt_user_client_ui_SimplePanel_widget;
  if (w) {
    this$static.com_google_gwt_user_client_ui_PopupPanel_desiredHeight != null && w.setHeight__Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_desiredHeight);
    this$static.com_google_gwt_user_client_ui_PopupPanel_desiredWidth != null && w.setWidth__Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_desiredWidth);
  }
}

function com_google_gwt_user_client_ui_PopupPanel_$previewNativeEvent__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled || !this$static.com_google_gwt_user_client_ui_PopupPanel_previewAllNativeEvents && event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed) {
    this$static.com_google_gwt_user_client_ui_PopupPanel_modal && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(event_0);
  if (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled) {
    return;
  }
  nativeEvent = event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
  eventTargetsPopupOrPartner = com_google_gwt_user_client_ui_PopupPanel_$eventTargetsPopup__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true);
  this$static.com_google_gwt_user_client_ui_PopupPanel_modal && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true);
  type_0 = com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(nativeEvent.type);
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        return;
      }

    case 4:
    case 1048576:
      {
        if (com_google_gwt_user_client_DOM_sCaptureElem) {
          event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.com_google_gwt_user_client_ui_PopupPanel_autoHide) {
        this$static.hide__ZV(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case 4194304:
      {
        if (com_google_gwt_user_client_DOM_sCaptureElem) {
          event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.srcElement;
        if (this$static.com_google_gwt_user_client_ui_PopupPanel_modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true;
          return;
        }
        break;
      }

  }
}

function com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this$static, left, top_0){
  var elem;
  this$static.com_google_gwt_user_client_ui_PopupPanel_leftPosition = left;
  this$static.com_google_gwt_user_client_ui_PopupPanel_topPosition = top_0;
  left -= com_google_gwt_dom_client_Document_$getBodyOffsetLeft__Lcom_google_gwt_dom_client_Document_2I($doc);
  top_0 -= com_google_gwt_dom_client_Document_$getBodyOffsetTop__Lcom_google_gwt_dom_client_Document_2I($doc);
  elem = this$static.com_google_gwt_user_client_ui_UIObject_element;
  elem.style['left'] = left + (com_google_gwt_dom_client_Style$Unit_$clinit__V() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function com_google_gwt_user_client_ui_PopupPanel_$setWidget__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w);
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static);
}

function com_google_gwt_user_client_ui_PopupPanel_$updateHandlers__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static){
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration = null;
  }
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_historyHandlerRegistration) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_historyHandlerRegistration.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_user_client_ui_PopupPanel_historyHandlerRegistration = null;
  }
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_showing) {
    this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration = com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_PopupPanel$3_PopupPanel$3__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static));
    this$static.com_google_gwt_user_client_ui_PopupPanel_historyHandlerRegistration = com_google_gwt_user_client_History_addValueChangeHandler__Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_PopupPanel$4_PopupPanel$4__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static));
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(87, 86, $intern_14);
_.getContainerElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_PopupPanel_getContainerElement__Lcom_google_gwt_user_client_Element_2(){
  return com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element);
}
;
_.hide__ZV = function com_google_gwt_user_client_ui_PopupPanel_hide__ZV(autoClosed){
  com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2ZV(this);
}
;
_.onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V = function com_google_gwt_user_client_ui_PopupPanel_onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(event_0){
  event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler && false && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true);
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_PopupPanel_onUnload__V(){
  this.com_google_gwt_user_client_ui_PopupPanel_showing && com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2ZZV(this.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation, true);
}
;
_.setHeight__Ljava_lang_String_2V = function com_google_gwt_user_client_ui_PopupPanel_setHeight__Ljava_lang_String_2V(height){
  this.com_google_gwt_user_client_ui_PopupPanel_desiredHeight = height;
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this);
  height.length == 0 && (this.com_google_gwt_user_client_ui_PopupPanel_desiredHeight = null);
}
;
_.setWidth__Ljava_lang_String_2V = function com_google_gwt_user_client_ui_PopupPanel_setWidth__Ljava_lang_String_2V(width_0){
  this.com_google_gwt_user_client_ui_PopupPanel_desiredWidth = width_0;
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this);
  width_0.length == 0 && (this.com_google_gwt_user_client_ui_PopupPanel_desiredWidth = null);
}
;
_.com_google_gwt_user_client_ui_PopupPanel_autoHide = false;
_.com_google_gwt_user_client_ui_PopupPanel_autoHideOnHistoryEvents = false;
_.com_google_gwt_user_client_ui_PopupPanel_isGlassEnabled = false;
_.com_google_gwt_user_client_ui_PopupPanel_leftPosition = 0;
_.com_google_gwt_user_client_ui_PopupPanel_modal = false;
_.com_google_gwt_user_client_ui_PopupPanel_previewAllNativeEvents = false;
_.com_google_gwt_user_client_ui_PopupPanel_showing = false;
_.com_google_gwt_user_client_ui_PopupPanel_topPosition = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'PopupPanel', 87);
function com_google_gwt_user_client_ui_DecoratedPopupPanel_$setWidget__Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel, w);
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(242, 87, $intern_14);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_DecoratedPopupPanel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_DecoratedPopupPanel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
}
;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_DecoratedPopupPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_DecoratedPopupPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DecoratedPopupPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'DecoratedPopupPanel', 242);
function com_google_gwt_user_client_ui_DialogBox_$beginDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseDownEvent_2V(this$static, event_0){
  com_google_gwt_user_client_ui_DialogBox_$onMouseDown__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static, com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0), com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0));
}

function com_google_gwt_user_client_ui_DialogBox_$continueDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseMoveEvent_2V(this$static, event_0){
  com_google_gwt_user_client_ui_DialogBox_$onMouseMove__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static, com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0), com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0));
}

function com_google_gwt_user_client_ui_DialogBox_$endDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseUpEvent_2V(this$static, event_0){
  com_google_gwt_user_client_ui_DialogBox_$onMouseUp__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV((com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0) , com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0) , this$static));
}

function com_google_gwt_user_client_ui_DialogBox_$isCaptionEvent__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (com_google_gwt_dom_client_Element_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(target)) {
    return com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_DecoratorPanel_$getCellElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2IILcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel)), target);
  }
  return false;
}

function com_google_gwt_user_client_ui_DialogBox_$onMouseDown__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static, x_0, y_0){
  if (!com_google_gwt_user_client_DOM_sCaptureElem) {
    this$static.com_google_gwt_user_client_ui_DialogBox_dragging = true;
    com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_UIObject_element);
    this$static.com_google_gwt_user_client_ui_DialogBox_dragStartX = x_0;
    this$static.com_google_gwt_user_client_ui_DialogBox_dragStartY = y_0;
  }
}

function com_google_gwt_user_client_ui_DialogBox_$onMouseMove__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static, x_0, y_0){
  var absX, absY;
  if (this$static.com_google_gwt_user_client_ui_DialogBox_dragging) {
    absX = x_0 + com_google_gwt_dom_client_Element_$getAbsoluteLeft__Lcom_google_gwt_dom_client_Element_2I(this$static.com_google_gwt_user_client_ui_UIObject_element);
    absY = y_0 + com_google_gwt_dom_client_Element_$getAbsoluteTop__Lcom_google_gwt_dom_client_Element_2I(this$static.com_google_gwt_user_client_ui_UIObject_element);
    if (absX < this$static.com_google_gwt_user_client_ui_DialogBox_clientLeft || absX >= this$static.com_google_gwt_user_client_ui_DialogBox_windowWidth || absY < this$static.com_google_gwt_user_client_ui_DialogBox_clientTop) {
      return;
    }
    com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this$static, absX - this$static.com_google_gwt_user_client_ui_DialogBox_dragStartX, absY - this$static.com_google_gwt_user_client_ui_DialogBox_dragStartY);
  }
}

function com_google_gwt_user_client_ui_DialogBox_$onMouseUp__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static){
  this$static.com_google_gwt_user_client_ui_DialogBox_dragging = false;
  com_google_gwt_user_client_DOM_releaseCapture__Lcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_DialogBox_$setText__Lcom_google_gwt_user_client_ui_DialogBox_2Ljava_lang_String_2V(this$static, text_0){
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DialogBox_caption, text_0);
}

function com_google_gwt_user_client_ui_DialogBox_DialogBox__ZZLcom_google_gwt_user_client_ui_DialogBox$Caption_2V(captionWidget){
  var mouseHandler, td, com_google_gwt_user_client_ui_DecoratedPopupPanel_DecoratedPopupPanel__ZZLjava_lang_String_2V_rowStyles_0;
  com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V.call(this, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, $intern_15));
  this.com_google_gwt_user_client_ui_PopupPanel_glassResizer = new com_google_gwt_user_client_ui_PopupPanel$1_PopupPanel$1__Lcom_google_gwt_user_client_ui_PopupPanel_2V;
  this.com_google_gwt_user_client_ui_PopupPanel_leftPosition = -1;
  this.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation = new com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_PopupPanel$ResizeAnimation__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this);
  this.com_google_gwt_user_client_ui_PopupPanel_topPosition = -1;
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_UIObject_element, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, $intern_15));
  com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this, 0, 0);
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element)).className = 'gwt-PopupPanel';
  com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element).className = $intern_16;
  this.com_google_gwt_user_client_ui_PopupPanel_autoHide = false;
  this.com_google_gwt_user_client_ui_PopupPanel_autoHideOnHistoryEvents = false;
  this.com_google_gwt_user_client_ui_PopupPanel_modal = true;
  com_google_gwt_user_client_ui_DecoratedPopupPanel_DecoratedPopupPanel__ZZLjava_lang_String_2V_rowStyles_0 = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_17, 2, 6, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel = new com_google_gwt_user_client_ui_DecoratorPanel_DecoratorPanel___3Ljava_lang_String_2IV(com_google_gwt_user_client_ui_DecoratedPopupPanel_DecoratedPopupPanel__ZZLjava_lang_String_2V_rowStyles_0);
  this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel.com_google_gwt_user_client_ui_UIObject_element.className = '';
  com_google_gwt_user_client_ui_UIObject_setStylePrimaryName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element)), 'gwt-DecoratedPopupPanel');
  com_google_gwt_user_client_ui_PopupPanel_$setWidget__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this, this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element), $intern_16, false);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel.com_google_gwt_user_client_ui_DecoratorPanel_containerElem, 'dialogContent', true);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(captionWidget);
  this.com_google_gwt_user_client_ui_DialogBox_caption = captionWidget;
  td = com_google_gwt_user_client_ui_DecoratorPanel_$getCellElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2IILcom_google_gwt_user_client_Element_2(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(td, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_DialogBox_caption.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Panel_$adopt__Lcom_google_gwt_user_client_ui_Panel_2Lcom_google_gwt_user_client_ui_Widget_2V(this, this.com_google_gwt_user_client_ui_DialogBox_caption);
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element)).className = 'gwt-DialogBox';
  this.com_google_gwt_user_client_ui_DialogBox_windowWidth = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
  this.com_google_gwt_user_client_ui_DialogBox_clientLeft = com_google_gwt_dom_client_Document_$getBodyOffsetLeft__Lcom_google_gwt_dom_client_Document_2I($doc);
  this.com_google_gwt_user_client_ui_DialogBox_clientTop = com_google_gwt_dom_client_Document_$getBodyOffsetTop__Lcom_google_gwt_dom_client_Document_2I($doc);
  mouseHandler = new com_google_gwt_user_client_ui_DialogBox$MouseHandler_DialogBox$MouseHandler__Lcom_google_gwt_user_client_ui_DialogBox_2V(this);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseDownEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseDownEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseDownEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseUpEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseUpEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseUpEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseMoveEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseOverEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseOverEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseOverEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseOutEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseOutEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseOutEvent_TYPE));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(71, 242, $intern_14);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_DialogBox_doAttachChildren__V(){
  try {
    com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  }
   finally {
    com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DialogBox_caption);
  }
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_DialogBox_doDetachChildren__V(){
  try {
    com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  }
   finally {
    com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DialogBox_caption);
  }
}
;
_.hide__ZV = function com_google_gwt_user_client_ui_DialogBox_hide__ZV(autoClosed){
  com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2ZV(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_DialogBox_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  switch (com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.com_google_gwt_user_client_ui_DialogBox_dragging && !com_google_gwt_user_client_ui_DialogBox_$isCaptionEvent__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this, event_0)) {
        return;
      }

  }
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V = function com_google_gwt_user_client_ui_DialogBox_onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(event_0){
  var nativeEvent;
  nativeEvent = event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
  !event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled && com_google_gwt_user_client_Event_$getTypeInt__Lcom_google_gwt_user_client_Event_2I(event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent) == 4 && com_google_gwt_user_client_ui_DialogBox_$isCaptionEvent__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this, nativeEvent) && (nativeEvent.returnValue = false , undefined);
  event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler && false && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true);
}
;
_.com_google_gwt_user_client_ui_DialogBox_clientLeft = 0;
_.com_google_gwt_user_client_ui_DialogBox_clientTop = 0;
_.com_google_gwt_user_client_ui_DialogBox_dragStartX = 0;
_.com_google_gwt_user_client_ui_DialogBox_dragStartY = 0;
_.com_google_gwt_user_client_ui_DialogBox_dragging = false;
_.com_google_gwt_user_client_ui_DialogBox_windowWidth = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DialogBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'DialogBox', 71);
function com_exampleproject_gwt_startpoint_client_views_BookInfoView_BookInfoView__Lcom_exampleproject_model_shared_Book_2V(book){
  com_google_gwt_user_client_ui_DialogBox_DialogBox__ZZLcom_google_gwt_user_client_ui_DialogBox$Caption_2V.call(this, new com_google_gwt_user_client_ui_DialogBox$CaptionImpl_DialogBox$CaptionImpl__V);
  com_google_gwt_user_client_ui_DecoratedPopupPanel_$setWidget__Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this, com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel1__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_BookInfoView_1BookInfoViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_2V(this)));
  com_google_gwt_user_client_ui_DialogBox_$setText__Lcom_google_gwt_user_client_ui_DialogBox_2Ljava_lang_String_2V(this, book.com_exampleproject_model_shared_Book_title);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(243, 71, $intern_14, com_exampleproject_gwt_startpoint_client_views_BookInfoView_BookInfoView__Lcom_exampleproject_model_shared_Book_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1BookInfoView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'BookInfoView', 243);
function com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel1__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2(this$static){
  var author, booksPhoto, canBuy, description, f_VerticalPanel1, pages, publisher, title_0, com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1toCart__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_toCart_0, com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1close__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_close_0;
  f_VerticalPanel1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (booksPhoto = new com_google_gwt_user_client_ui_Image_Image__V , booksPhoto));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (title_0 = new com_google_gwt_user_client_ui_Label_Label__V , title_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (author = new com_google_gwt_user_client_ui_Label_Label__V , author));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (publisher = new com_google_gwt_user_client_ui_Label_Label__V , publisher));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (pages = new com_google_gwt_user_client_ui_Label_Label__V , pages));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (description = new com_google_gwt_user_client_ui_Label_Label__V , description));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (canBuy = new com_google_gwt_user_client_ui_Label_Label__V , canBuy));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1toCart__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_toCart_0 = new com_google_gwt_user_client_ui_Button_Button__V , com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1toCart__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_toCart_0.com_google_gwt_user_client_ui_UIObject_element.innerText = '\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443' , undefined , com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1toCart__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_toCart_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1close__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_close_0 = new com_google_gwt_user_client_ui_Button_Button__V , com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1close__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_close_0.com_google_gwt_user_client_ui_UIObject_element.innerText = '\u0417\u0430\u043A\u0440\u044B\u0442\u044C' , com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1close__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_close_0, this$static.com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE)) , com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_$build_1close__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_close_0));
  f_VerticalPanel1.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5;
  return f_VerticalPanel1;
}

function com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_BookInfoView_1BookInfoViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_2V(owner){
  this.com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2V(this);
  this.com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_owner = owner;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(252, 1, {}, com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_BookInfoView_1BookInfoViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1BookInfoView_11BookInfoViewUiBinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'BookInfoView_BookInfoViewUiBinderImpl/Widgets', 252);
function com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2V(this$1){
  this.com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1_this$11 = this$1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(253, 1, $intern_20, com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
  com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2ZV(this.com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets$1_this$11.com_exampleproject_gwt_startpoint_client_views_BookInfoView_1BookInfoViewUiBinderImpl$Widgets_owner);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1BookInfoView_11BookInfoViewUiBinderImpl$Widgets$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'BookInfoView_BookInfoViewUiBinderImpl/Widgets/1', 253);
function com_google_gwt_user_client_ui_Composite_$checkInit__Lcom_google_gwt_user_client_ui_Composite_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Composite_widget) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('initWidget() is not called yet'));
  }
}

function com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, widget){
  var elem;
  if (this$static.com_google_gwt_user_client_ui_Composite_widget) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Composite.initWidget() may only be called once.'));
  }
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  elem = widget.com_google_gwt_user_client_ui_UIObject_element;
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  (com_google_gwt_user_client_ui_PotentialElement_$clinit__V() , com_google_gwt_user_client_DOM_isPotential__Lcom_google_gwt_core_client_JavaScriptObject_2Z(elem)) && com_google_gwt_user_client_ui_PotentialElement_$setResolver__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2(elem, this$static);
  this$static.com_google_gwt_user_client_ui_Composite_widget = widget;
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(286, 7, $intern_13);
_.isAttached__Z = function com_google_gwt_user_client_ui_Composite_isAttached__Z(){
  if (this.com_google_gwt_user_client_ui_Composite_widget) {
    return this.com_google_gwt_user_client_ui_Composite_widget.com_google_gwt_user_client_ui_Widget_attached;
  }
  return false;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Composite_onAttach__V(){
  com_google_gwt_user_client_ui_Composite_$checkInit__Lcom_google_gwt_user_client_ui_Composite_2V(this);
  if (this.com_google_gwt_user_client_ui_Widget_eventsToSink != -1) {
    com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this.com_google_gwt_user_client_ui_Composite_widget, this.com_google_gwt_user_client_ui_Widget_eventsToSink);
    this.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  }
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_Composite_widget);
  this.com_google_gwt_user_client_ui_UIObject_element.__listener = this;
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Composite_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this.com_google_gwt_user_client_ui_Composite_widget, event_0);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Composite_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_Composite_widget);
}
;
_.resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2 = function com_google_gwt_user_client_ui_Composite_resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2(){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, com_google_gwt_user_client_ui_UIObject_$resolvePotentialElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2());
  return this.com_google_gwt_user_client_ui_UIObject_element;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Composite_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Composite', 286);
function com_exampleproject_gwt_startpoint_client_views_BookPreview_BookPreview__Lcom_exampleproject_model_shared_Book_2V(book){
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1FlowPanel1__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_FlowPanel_2(new com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_BookPreview_1BookPreviewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V(this)));
  book.com_exampleproject_model_shared_Book_photoUrl == null?com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_photo, 'https://smvape.com.ua/wp-content/uploads/2018/12/no_photo.jpg'):com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_photo, book.com_exampleproject_model_shared_Book_photoUrl);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2IIV(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_photo);
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_title, book.com_exampleproject_model_shared_Book_title);
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_author, com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(book.com_exampleproject_model_shared_Book_authors));
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_price, '' + book.com_exampleproject_model_shared_Book_price + ' \u0440\u0443\u0431.');
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_moreInfo, new com_exampleproject_gwt_startpoint_client_views_BookPreview$1_BookPreview$1__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V(book), (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(108, 286, $intern_13, com_exampleproject_gwt_startpoint_client_views_BookPreview_BookPreview__Lcom_exampleproject_model_shared_Book_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1BookPreview_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'BookPreview', 108);
function com_exampleproject_gwt_startpoint_client_views_BookPreview$1_BookPreview$1__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V(val$book){
  this.com_exampleproject_gwt_startpoint_client_views_BookPreview$1_val$book2 = val$book;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(235, 1, $intern_20, com_exampleproject_gwt_startpoint_client_views_BookPreview$1_BookPreview$1__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_exampleproject_gwt_startpoint_client_views_BookPreview$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(clickEvent){
  new com_exampleproject_gwt_startpoint_client_views_BookInfoView_BookInfoView__Lcom_exampleproject_model_shared_Book_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview$1_val$book2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1BookPreview$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'BookPreview/1', 235);
function com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1FlowPanel1__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_FlowPanel_2(this$static){
  var f_FlowPanel1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1photo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Image_2_photo_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1author__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_author_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1price__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_price_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel3_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1buyBook__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_buyBook_0_0, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_0_0;
  f_FlowPanel1 = new com_google_gwt_user_client_ui_FlowPanel_FlowPanel__V;
  com_google_gwt_user_client_ui_FlowPanel_$add__Lcom_google_gwt_user_client_ui_FlowPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_FlowPanel1, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1photo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Image_2_photo_1 = new com_google_gwt_user_client_ui_Image_Image__V , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_photo = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1photo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Image_2_photo_1 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1photo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Image_2_photo_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1 = new com_google_gwt_user_client_ui_Label_Label__V , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = '' , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_title = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1author__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_author_1 = new com_google_gwt_user_client_ui_Label_Label__V , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_author = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1author__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_author_1 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1author__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_author_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1price__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_price_1 = new com_google_gwt_user_client_ui_Label_Label__V , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_price = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1price__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_price_1 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1price__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_price_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel3_1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel3_1, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1buyBook__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_buyBook_0_0 = new com_google_gwt_user_client_ui_Button_Button__V , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1buyBook__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_buyBook_0_0.com_google_gwt_user_client_ui_UIObject_element.innerText = '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443' , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1buyBook__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_buyBook_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel3_1, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_0_0 = new com_google_gwt_user_client_ui_Button_Button__V , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_0_0.com_google_gwt_user_client_ui_UIObject_element.innerText = '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435' , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_moreInfo = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_0_0 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_0_0)) , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel3_1.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel3_1)) , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 2 , undefined , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0));
  return f_FlowPanel1;
}

function com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_BookPreview_1BookPreviewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V(owner){
  this.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner = owner;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(241, 1, {}, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_BookPreview_1BookPreviewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1BookPreview_11BookPreviewUiBinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'BookPreview_BookPreviewUiBinderImpl/Widgets', 241);
function com_exampleproject_gwt_startpoint_client_views_LoginView_$doClickLogin__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_2Lcom_google_gwt_event_dom_client_ClickEvent_2V(this$static){
  var logInfo;
  if (com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_loginBox).length == 0) {
    com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_errorLabel, '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D');
  }
   else if (com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_passwordBox).length == 0) {
    com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_errorLabel, '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C');
  }
   else if (com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_loginBox).length < 5) {
    com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_errorLabel, '\u041B\u043E\u0433\u0438\u043D \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439');
  }
   else if (com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_passwordBox).length < 5) {
    com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_errorLabel, '\u041F\u0430\u0440\u043E\u043B\u044C \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439');
  }
   else {
    com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_errorLabel, '');
    logInfo = new java_util_ArrayList_ArrayList__V;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(logInfo, com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_loginBox));
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(logInfo, '' + javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_passwordBox)));
    com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$isLogged__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Ljava_util_List_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_client, logInfo, new com_exampleproject_gwt_startpoint_client_views_LoginView$1_LoginView$1__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_2V(this$static));
  }
}

function com_exampleproject_gwt_startpoint_client_views_LoginView_LoginView__V(){
  this.com_exampleproject_gwt_startpoint_client_views_LoginView_client = new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_WorkerClient_1Generated_1RestServiceProxy_1__V;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel1__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_LoginView_1LoginViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_LoginView_2V(this)));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(114, 286, $intern_13, com_exampleproject_gwt_startpoint_client_views_LoginView_LoginView__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1LoginView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'LoginView', 114);
function com_exampleproject_gwt_startpoint_client_views_LoginView$1_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_LoginView$1_2Lorg_fusesource_restygwt_client_Method_2Lcom_exampleproject_model_shared_User_2V(this$static, user){
  if (!user) {
    com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_exampleproject_gwt_startpoint_client_views_LoginView$1_this$01.com_exampleproject_gwt_startpoint_client_views_LoginView_errorLabel, '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043B\u043E\u0433\u0438\u043D \u0438 \u043F\u0430\u0440\u043E\u043B\u044C');
  }
   else {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2());
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(), new com_exampleproject_gwt_startpoint_client_views_MainView_MainView__V);
  }
}

function com_exampleproject_gwt_startpoint_client_views_LoginView$1_LoginView$1__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_2V(this$0){
  this.com_exampleproject_gwt_startpoint_client_views_LoginView$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(130, 1, {}, com_exampleproject_gwt_startpoint_client_views_LoginView$1_LoginView$1__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_2V);
_.onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V = function com_exampleproject_gwt_startpoint_client_views_LoginView$1_onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V(method, user){
  com_exampleproject_gwt_startpoint_client_views_LoginView$1_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_LoginView$1_2Lorg_fusesource_restygwt_client_Method_2Lcom_exampleproject_model_shared_User_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(user, 84));
}
;
_.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V = function com_exampleproject_gwt_startpoint_client_views_LoginView$1_onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(method, throwable){
  com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(throwable, throwable.getMessage__Ljava_lang_String_2()) + '\n' + throwable.getMessage__Ljava_lang_String_2());
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1LoginView$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'LoginView/1', 130);
function com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel1__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2(this$static){
  var f_VerticalPanel1, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1Label2__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label2_0, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_loginBox_0, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1Label3__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label3_0, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1passwordBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_passwordBox_0, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1errorLabel__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_errorLabel_0, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginButton__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_loginButton_1, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1signUp__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_signUp_1;
  f_VerticalPanel1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1Label2__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label2_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1Label2__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label2_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u041B\u043E\u0433\u0438\u043D:') , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1Label2__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label2_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_loginBox_0 = new com_google_gwt_user_client_ui_TextBox_TextBox__V , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_loginBox_0.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = '300' , undefined , this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_LoginView_loginBox = com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_loginBox_0 , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_loginBox_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1Label3__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label3_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1Label3__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label3_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u041F\u0430\u0440\u043E\u043B\u044C:') , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1Label3__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label3_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1passwordBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_passwordBox_0 = new com_google_gwt_user_client_ui_TextBox_TextBox__V , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1passwordBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_passwordBox_0.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = '300' , undefined , this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_LoginView_passwordBox = com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1passwordBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_passwordBox_0 , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1passwordBox__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_passwordBox_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$setHorizontalAlignment__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0, (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1CENTER)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0, (com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginButton__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_loginButton_1 = new com_google_gwt_user_client_ui_Button_Button__V , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginButton__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_loginButton_1.com_google_gwt_user_client_ui_UIObject_element.innerText = '\u0412\u043E\u0439\u0442\u0438' , com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginButton__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_loginButton_1, this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE)) , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1loginButton__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_loginButton_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0, (com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1signUp__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_signUp_1 = new com_google_gwt_user_client_ui_Button_Button__V , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1signUp__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_signUp_1.com_google_gwt_user_client_ui_UIObject_element.innerText = '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F' , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1signUp__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_signUp_1)) , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5 , undefined , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1errorLabel__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_errorLabel_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1errorLabel__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_errorLabel_0.com_google_gwt_user_client_ui_UIObject_element.style[$intern_8] = '20' , this$static.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_LoginView_errorLabel = com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1errorLabel__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_errorLabel_0 , com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_$build_1errorLabel__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_errorLabel_0));
  f_VerticalPanel1.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5;
  f_VerticalPanel1.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = '400';
  f_VerticalPanel1.com_google_gwt_user_client_ui_UIObject_element.style[$intern_8] = '250';
  return f_VerticalPanel1;
}

function com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_LoginView_1LoginViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_LoginView_2V(owner){
  this.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets$1_LoginView_1LoginViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2V(this);
  this.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_owner = owner;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(144, 1, {}, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_LoginView_1LoginViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_LoginView_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1LoginView_11LoginViewUiBinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'LoginView_LoginViewUiBinderImpl/Widgets', 144);
function com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets$1_LoginView_1LoginViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2V(this$1){
  this.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets$1_this$11 = this$1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(145, 1, $intern_20, com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets$1_LoginView_1LoginViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
  com_exampleproject_gwt_startpoint_client_views_LoginView_$doClickLogin__Lcom_exampleproject_gwt_startpoint_client_views_LoginView_2Lcom_google_gwt_event_dom_client_ClickEvent_2V(this.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets$1_this$11.com_exampleproject_gwt_startpoint_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_owner);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1LoginView_11LoginViewUiBinderImpl$Widgets$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'LoginView_LoginViewUiBinderImpl/Widgets/1', 145);
function com_exampleproject_gwt_startpoint_client_views_MainView_$doSorting__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2Lcom_google_gwt_event_dom_client_ClickEvent_2V(this$static){
  var genre, maxPrice, minPrice, params, photo, raw, raw0;
  minPrice = (raw0 = com_google_gwt_user_client_ui_ValueBoxBase_$getValueOrThrow__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_Object_2(this$static.com_exampleproject_gwt_startpoint_client_views_MainView_minPriceBox) , raw0 == null?'':raw0);
  maxPrice = (raw = com_google_gwt_user_client_ui_ValueBoxBase_$getValueOrThrow__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_Object_2(this$static.com_exampleproject_gwt_startpoint_client_views_MainView_maxPriceBox) , raw == null?'':raw);
  genre = com_google_gwt_user_client_ui_ListBox_$getSelectedItemText__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2(this$static.com_exampleproject_gwt_startpoint_client_views_MainView_genreList);
  photo = 'ph';
  !this$static.com_exampleproject_gwt_startpoint_client_views_MainView_withPhoto.com_google_gwt_user_client_ui_CheckBox_inputElem.disabled || (photo = null);
  params = new java_util_ArrayList_ArrayList__V;
  params.java_util_ArrayList_array[params.java_util_ArrayList_array.length] = minPrice;
  params.java_util_ArrayList_array[params.java_util_ArrayList_array.length] = maxPrice;
  params.java_util_ArrayList_array[params.java_util_ArrayList_array.length] = genre;
  params.java_util_ArrayList_array[params.java_util_ArrayList_array.length] = photo;
  com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$sortBooks__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Ljava_util_List_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static.com_exampleproject_gwt_startpoint_client_views_MainView_client, params, new com_exampleproject_gwt_startpoint_client_views_MainView$1_MainView$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this$static));
}

function com_exampleproject_gwt_startpoint_client_views_MainView_MainView__V(){
  this.com_exampleproject_gwt_startpoint_client_views_MainView_grid = new com_google_gwt_user_client_ui_Grid_Grid__IIV;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_client = new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_WorkerClient_1Generated_1RestServiceProxy_1__V;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_MainView_1MainViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this)));
  com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2Ljava_lang_String_2IV(this.com_exampleproject_gwt_startpoint_client_views_MainView_genreList, $intern_21, $intern_21, -1);
  com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$selectGenres__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView_client, new com_exampleproject_gwt_startpoint_client_views_MainView$2_MainView$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this));
  this.com_exampleproject_gwt_startpoint_client_views_MainView_genreList.com_google_gwt_user_client_ui_UIObject_element.size = 1;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_grid = new com_google_gwt_user_client_ui_Grid_Grid__IIV;
  com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$selectBooks__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView_client, new com_exampleproject_gwt_startpoint_client_views_MainView$3_MainView$3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this));
  this.com_exampleproject_gwt_startpoint_client_views_MainView_grid.com_google_gwt_user_client_ui_HTMLTable_tableElem[$intern_19] = 3;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView_booksTable, this.com_exampleproject_gwt_startpoint_client_views_MainView_grid);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(221, 286, $intern_13, com_exampleproject_gwt_startpoint_client_views_MainView_MainView__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'MainView', 221);
function com_exampleproject_gwt_startpoint_client_views_MainView$1_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_MainView$1_2Lorg_fusesource_restygwt_client_Method_2Ljava_util_List_2V(this$static, list){
  var col, i, row;
  com_google_gwt_user_client_ui_HTMLTable_$clear__Lcom_google_gwt_user_client_ui_HTMLTable_2ZV(this$static.com_exampleproject_gwt_startpoint_client_views_MainView$1_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid);
  i = 0;
  for (row = 0; row < this$static.com_exampleproject_gwt_startpoint_client_views_MainView$1_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid.com_google_gwt_user_client_ui_Grid_numRows; row++) {
    for (col = 0; col < this$static.com_exampleproject_gwt_startpoint_client_views_MainView$1_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid.com_google_gwt_user_client_ui_Grid_numColumns; col++) {
      com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(this$static.com_exampleproject_gwt_startpoint_client_views_MainView$1_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid, row, col, new com_exampleproject_gwt_startpoint_client_views_BookPreview_BookPreview__Lcom_exampleproject_model_shared_Book_2V(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(list.get__ILjava_lang_Object_2(i), 57)));
      ++i;
    }
  }
}

function com_exampleproject_gwt_startpoint_client_views_MainView$1_MainView$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this$0){
  this.com_exampleproject_gwt_startpoint_client_views_MainView$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(222, 1, {}, com_exampleproject_gwt_startpoint_client_views_MainView$1_MainView$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V);
_.onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$1_onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V(method, list){
  com_exampleproject_gwt_startpoint_client_views_MainView$1_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_MainView$1_2Lorg_fusesource_restygwt_client_Method_2Ljava_util_List_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(list, 27));
}
;
_.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$1_onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(method, throwable){
  com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(throwable, throwable.getMessage__Ljava_lang_String_2()) + '\n' + throwable.getMessage__Ljava_lang_String_2());
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'MainView/1', 222);
function com_exampleproject_gwt_startpoint_client_views_MainView$2_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_MainView$2_2Lorg_fusesource_restygwt_client_Method_2Ljava_util_List_2V(this$static, list){
  var g, g$iterator;
  for (g$iterator = list.iterator__Ljava_util_Iterator_2(); g$iterator.hasNext__Z();) {
    g = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(g$iterator.next__Ljava_lang_Object_2(), 68);
    com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2IV(this$static.com_exampleproject_gwt_startpoint_client_views_MainView$2_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_genreList, g.com_exampleproject_model_shared_Genre_genre);
  }
}

function com_exampleproject_gwt_startpoint_client_views_MainView$2_MainView$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this$0){
  this.com_exampleproject_gwt_startpoint_client_views_MainView$2_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(223, 1, {}, com_exampleproject_gwt_startpoint_client_views_MainView$2_MainView$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V);
_.onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$2_onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V(method, list){
  com_exampleproject_gwt_startpoint_client_views_MainView$2_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_MainView$2_2Lorg_fusesource_restygwt_client_Method_2Ljava_util_List_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(list, 27));
}
;
_.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$2_onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(method, throwable){
  com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(throwable, throwable.getMessage__Ljava_lang_String_2()) + '\n' + throwable.getMessage__Ljava_lang_String_2());
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'MainView/2', 223);
function com_exampleproject_gwt_startpoint_client_views_MainView$3_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_MainView$3_2Lorg_fusesource_restygwt_client_Method_2Ljava_util_List_2V(this$static, list){
  var col, i, row;
  i = 1;
  for (row = 0; row < this$static.com_exampleproject_gwt_startpoint_client_views_MainView$3_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid.com_google_gwt_user_client_ui_Grid_numRows; row++) {
    for (col = 0; col < this$static.com_exampleproject_gwt_startpoint_client_views_MainView$3_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid.com_google_gwt_user_client_ui_Grid_numColumns; col++) {
      com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(this$static.com_exampleproject_gwt_startpoint_client_views_MainView$3_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid, row, col, new com_exampleproject_gwt_startpoint_client_views_BookPreview_BookPreview__Lcom_exampleproject_model_shared_Book_2V(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(list.get__ILjava_lang_Object_2(i), 57)));
      ++i;
    }
  }
}

function com_exampleproject_gwt_startpoint_client_views_MainView$3_MainView$3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this$0){
  this.com_exampleproject_gwt_startpoint_client_views_MainView$3_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(224, 1, {}, com_exampleproject_gwt_startpoint_client_views_MainView$3_MainView$3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V);
_.onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$3_onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V(method, list){
  com_exampleproject_gwt_startpoint_client_views_MainView$3_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_MainView$3_2Lorg_fusesource_restygwt_client_Method_2Ljava_util_List_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(list, 27));
}
;
_.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$3_onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(method, throwable){
  com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(throwable, throwable.getMessage__Ljava_lang_String_2()) + '\n' + throwable.getMessage__Ljava_lang_String_2());
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'MainView/3', 224);
function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2(this$static){
  var f_VerticalPanel1, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_td_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1booksTable__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_booksTable_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label6__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label6_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label8__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label8_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1minPriceBox__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_minPriceBox_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label9__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label9_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label11__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label11_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1maxPriceBox__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_maxPriceBox_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label12__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label12_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label14__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label14_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1genreList__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_ListBox_2_genreList_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label16__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label16_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1;
  f_VerticalPanel1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0 = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0, this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart) , com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0, this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart, (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_td_0 = com_google_gwt_user_client_ui_CellPanel_$getWidgetTd__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0, this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart) , !!com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_td_0 && (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_td_0[$intern_7] = '1100px' , undefined) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 10 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0 = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label6__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label6_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label6__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label6_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u0426\u0435\u043D\u0430:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label6__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label6_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0 = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label8__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label8_0_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label8__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label8_0_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u043E\u0442:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label8__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label8_0_0_0)) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1minPriceBox__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_minPriceBox_0_0_0 = new com_google_gwt_user_client_ui_TextBox_TextBox__V , this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_MainView_minPriceBox = com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1minPriceBox__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_minPriceBox_0_0_0 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1minPriceBox__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_minPriceBox_0_0_0)) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label9__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label9_0_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label9__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label9_0_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, $intern_22) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label9__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label9_0_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0 = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label11__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label11_0_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label11__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label11_0_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u0434\u043E:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label11__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label11_0_0_0)) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1maxPriceBox__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_maxPriceBox_0_0_0 = new com_google_gwt_user_client_ui_TextBox_TextBox__V , this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_MainView_maxPriceBox = com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1maxPriceBox__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_maxPriceBox_0_0_0 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1maxPriceBox__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_maxPriceBox_0_0_0)) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label12__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label12_0_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label12__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label12_0_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, $intern_22) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label12__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label12_0_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label14__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label14_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label14__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label14_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u0416\u0430\u043D\u0440\u044B:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label14__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label14_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1genreList__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_ListBox_2_genreList_0_0 = new com_google_gwt_user_client_ui_ListBox_ListBox__V , this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_MainView_genreList = com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1genreList__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_ListBox_2_genreList_0_0 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1genreList__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_ListBox_2_genreList_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label16__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label16_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label16__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label16_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label16__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label16_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0 = new com_google_gwt_user_client_ui_CheckBox_CheckBox__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0.com_google_gwt_user_client_ui_CheckBox_directionalTextHelper, '\u0421 \u0444\u043E\u0442\u043E') , this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_MainView_withPhoto = com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1 = new com_google_gwt_user_client_ui_Button_Button__V , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1.com_google_gwt_user_client_ui_UIObject_element.innerText = '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C' , com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1, this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = 10 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0)) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1booksTable__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_booksTable_0_0 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_MainView_booksTable = com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1booksTable__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_booksTable_0_0 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1booksTable__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_booksTable_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0));
  return f_VerticalPanel1;
}

function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_MainView_1MainViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(owner){
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$1_MainView_1MainViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_MainView_1MainViewUiBinderImpl$Widgets$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V(this);
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner = owner;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart = new com_google_gwt_user_client_ui_Button_Button__V;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart.com_google_gwt_user_client_ui_UIObject_element.innerText = '\u041A\u043E\u0440\u0437\u0438\u043D\u0430';
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart, this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(230, 1, {}, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_MainView_1MainViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView_11MainViewUiBinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'MainView_MainViewUiBinderImpl/Widgets', 230);
function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$1_MainView_1MainViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(231, 1, $intern_20, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$1_MainView_1MainViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView_11MainViewUiBinderImpl$Widgets$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'MainView_MainViewUiBinderImpl/Widgets/1', 231);
function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_MainView_1MainViewUiBinderImpl$Widgets$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V(this$1){
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_this$11 = this$1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(232, 1, $intern_20, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_MainView_1MainViewUiBinderImpl$Widgets$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
  com_exampleproject_gwt_startpoint_client_views_MainView_$doSorting__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2Lcom_google_gwt_event_dom_client_ClickEvent_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_this$11.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView_11MainViewUiBinderImpl$Widgets$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'MainView_MainViewUiBinderImpl/Widgets/2', 232);
function com_exampleproject_model_shared_Author_$setId__Lcom_exampleproject_model_shared_Author_2IV(this$static, id_0){
  this$static.com_exampleproject_model_shared_Author_id = id_0;
}

function com_exampleproject_model_shared_Author_$setName__Lcom_exampleproject_model_shared_Author_2Ljava_lang_String_2V(this$static, name_0){
  this$static.com_exampleproject_model_shared_Author_name = name_0;
}

function com_exampleproject_model_shared_Author_$setSurname__Lcom_exampleproject_model_shared_Author_2Ljava_lang_String_2V(this$static, surname){
  this$static.com_exampleproject_model_shared_Author_surname = surname;
}

function com_exampleproject_model_shared_Author_Author__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(88, 1, {88:1}, com_exampleproject_model_shared_Author_Author__V);
_.toString__Ljava_lang_String_2 = function com_exampleproject_model_shared_Author_toString__Ljava_lang_String_2(){
  return this.com_exampleproject_model_shared_Author_surname + ' ' + this.com_exampleproject_model_shared_Author_name;
}
;
_.com_exampleproject_model_shared_Author_id = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Author_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Author', 88);
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V(){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT = new org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_AbstractJsonEncoderDecoder$5__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_FLOAT = new org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_AbstractJsonEncoderDecoder$7__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING = new org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_AbstractJsonEncoderDecoder$9__V;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_asArray__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONArray_2(value_0){
  var array, object;
  array = value_0.isArray__Lcom_google_gwt_json_client_JSONArray_2();
  if (!array) {
    object = value_0.isObject__Lcom_google_gwt_json_client_JSONObject_2();
    if (!object) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json array, but was given: ' + value_0));
    }
    array = new com_google_gwt_json_client_JSONArray_JSONArray__V;
    com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, 0);
    com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(array, 0, object);
  }
  return array;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(value_0, defaultValue){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, 82) || value_0 == null)
    return defaultValue;
  return value_0;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(object, value_0, jsonName){
  var com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2_previous_0;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  !!object && (com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2_previous_0 = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(value_0, jsonName) , com_google_gwt_json_client_JSONObject_$put0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2V(value_0, jsonName, object) , com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2_previous_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toDouble__Lcom_google_gwt_json_client_JSONValue_2D(value_0){
  var number, val;
  number = value_0.isNumber__Lcom_google_gwt_json_client_JSONNumber_2();
  if (!number) {
    val = value_0.isString__Lcom_google_gwt_json_client_JSONString_2();
    if (val) {
      try {
        return java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(val.com_google_gwt_json_client_JSONString_value);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 74))
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json number, but was given: ' + value_0));
  }
  return number.com_google_gwt_json_client_JSONNumber_value;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toJSON__Ljava_util_Collection_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Lcom_google_gwt_json_client_JSONValue_2(value_0, encoder){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  var i, rc, t, t$iterator;
  if (!value_0) {
    return org_fusesource_restygwt_client_Defaults_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  rc = new com_google_gwt_json_client_JSONArray_JSONArray__V;
  i = 0;
  for (t$iterator = value_0.iterator__Ljava_util_Iterator_2(); t$iterator.hasNext__Z();) {
    t = t$iterator.next__Ljava_lang_Object_2();
    com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(rc, i++, encoder.encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(t));
  }
  return rc;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toList__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_List_2(value_0, encoder){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  var array, i, rc, size_0;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  array = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_asArray__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONArray_2(value_0);
  rc = new java_util_ArrayList_ArrayList__IV(array.com_google_gwt_json_client_JSONArray_jsArray.length);
  size_0 = array.com_google_gwt_json_client_JSONArray_jsArray.length;
  for (i = 0; i < size_0; i++) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(rc, encoder.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i)));
  }
  return rc;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  var object;
  object = value_0.isObject__Lcom_google_gwt_json_client_JSONObject_2();
  if (!object) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json object, but was given: null'));
  }
  return object;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toSet__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_Set_2(value_0, encoder){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  var array, i, rc, size_0;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  array = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_asArray__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONArray_2(value_0);
  rc = new java_util_HashSet_HashSet__IV(array.com_google_gwt_json_client_JSONArray_jsArray.length * 2);
  size_0 = array.com_google_gwt_json_client_JSONArray_jsArray.length;
  for (i = 0; i < size_0; i++) {
    java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(rc, encoder.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i)));
  }
  return rc;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(301, 1, {});
var org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_FLOAT, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractJsonEncoderDecoder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AbstractJsonEncoderDecoder', 301);
function com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_$clinit__V(){
  com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_INSTANCE = new com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_Author_1Generated_1JsonEncoderDecoder_1__V;
}

function com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Author_2(value_0){
  var object, rc;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  object = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0);
  rc = new com_exampleproject_model_shared_Author_Author__V;
  com_exampleproject_model_shared_Author_$setId__Lcom_exampleproject_model_shared_Author_2IV(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'id'))), java_lang_Integer_valueOf__ILjava_lang_Integer_2(0)), 21).java_lang_Integer_value);
  com_exampleproject_model_shared_Author_$setName__Lcom_exampleproject_model_shared_Author_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'name'))), null)));
  com_exampleproject_model_shared_Author_$setSurname__Lcom_exampleproject_model_shared_Author_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_24))), null)));
  return rc;
}

function com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_2Lcom_exampleproject_model_shared_Author_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  var rc;
  if (!value_0) {
    return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_Defaults_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  rc = new com_google_gwt_json_client_JSONObject_JSONObject__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , java_lang_Integer_valueOf__ILjava_lang_Integer_2(value_0.com_exampleproject_model_shared_Author_id))), rc, 'id');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , value_0.com_exampleproject_model_shared_Author_name)), rc, 'name');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , value_0.com_exampleproject_model_shared_Author_surname)), rc, $intern_24);
  return rc;
}

function com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_Author_1Generated_1JsonEncoderDecoder_1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(255, 301, {}, com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_Author_1Generated_1JsonEncoderDecoder_1__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Author_2(value_0);
}
;
_.encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2 = function com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_2Lcom_exampleproject_model_shared_Author_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 88));
}
;
var com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Author_11Generated_11JsonEncoderDecoder_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Author_Generated_JsonEncoderDecoder_', 255);
function com_exampleproject_model_shared_Book_$setAuthors__Lcom_exampleproject_model_shared_Book_2Ljava_util_Set_2V(this$static, authors){
  this$static.com_exampleproject_model_shared_Book_authors = authors;
}

function com_exampleproject_model_shared_Book_$setDescription__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(this$static, description){
  this$static.com_exampleproject_model_shared_Book_description = description;
}

function com_exampleproject_model_shared_Book_$setGenres__Lcom_exampleproject_model_shared_Book_2Ljava_util_Set_2V(this$static, genres){
  this$static.com_exampleproject_model_shared_Book_genres = genres;
}

function com_exampleproject_model_shared_Book_$setId__Lcom_exampleproject_model_shared_Book_2IV(this$static, id_0){
  this$static.com_exampleproject_model_shared_Book_id = id_0;
}

function com_exampleproject_model_shared_Book_$setPages__Lcom_exampleproject_model_shared_Book_2IV(this$static, pages){
  this$static.com_exampleproject_model_shared_Book_pages = pages;
}

function com_exampleproject_model_shared_Book_$setPhotoUrl__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(this$static, photoUrl){
  this$static.com_exampleproject_model_shared_Book_photoUrl = photoUrl;
}

function com_exampleproject_model_shared_Book_$setPrice__Lcom_exampleproject_model_shared_Book_2FV(this$static, price){
  this$static.com_exampleproject_model_shared_Book_price = price;
}

function com_exampleproject_model_shared_Book_$setPublisher__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(this$static, publisher){
  this$static.com_exampleproject_model_shared_Book_publisher = publisher;
}

function com_exampleproject_model_shared_Book_$setQty__Lcom_exampleproject_model_shared_Book_2IV(this$static, qty){
  this$static.com_exampleproject_model_shared_Book_qty = qty;
}

function com_exampleproject_model_shared_Book_$setTitle__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(this$static, title_0){
  this$static.com_exampleproject_model_shared_Book_title = title_0;
}

function com_exampleproject_model_shared_Book_Book__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(57, 1, {57:1}, com_exampleproject_model_shared_Book_Book__V);
_.toString__Ljava_lang_String_2 = function com_exampleproject_model_shared_Book_toString__Ljava_lang_String_2(){
  return 'Book{id=' + this.com_exampleproject_model_shared_Book_id + ", title='" + this.com_exampleproject_model_shared_Book_title + "'" + ", publisher='" + this.com_exampleproject_model_shared_Book_publisher + "'" + ', pages=' + this.com_exampleproject_model_shared_Book_pages + ", description='" + this.com_exampleproject_model_shared_Book_description + "'" + ', price=' + this.com_exampleproject_model_shared_Book_price + ', qty=' + this.com_exampleproject_model_shared_Book_qty + ", photoUrl='" + this.com_exampleproject_model_shared_Book_photoUrl + "'" + ', genres=' + this.com_exampleproject_model_shared_Book_genres + ', authors=' + this.com_exampleproject_model_shared_Book_authors;
}
;
_.com_exampleproject_model_shared_Book_id = 0;
_.com_exampleproject_model_shared_Book_pages = 0;
_.com_exampleproject_model_shared_Book_price = 0;
_.com_exampleproject_model_shared_Book_qty = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Book_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Book', 57);
function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$clinit__V(){
  com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_INSTANCE = new com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_Book_1Generated_1JsonEncoderDecoder_1__V;
}

function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Book_2(value_0){
  var object, rc;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  object = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0);
  rc = new com_exampleproject_model_shared_Book_Book__V;
  com_exampleproject_model_shared_Book_$setId__Lcom_exampleproject_model_shared_Book_2IV(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'id'))), java_lang_Integer_valueOf__ILjava_lang_Integer_2(0)), 21).java_lang_Integer_value);
  com_exampleproject_model_shared_Book_$setTitle__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'title'))), null)));
  com_exampleproject_model_shared_Book_$setPublisher__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'publisher'))), null)));
  com_exampleproject_model_shared_Book_$setPages__Lcom_exampleproject_model_shared_Book_2IV(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'pages'))), java_lang_Integer_valueOf__ILjava_lang_Integer_2(0)), 21).java_lang_Integer_value);
  com_exampleproject_model_shared_Book_$setDescription__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_25))), null)));
  com_exampleproject_model_shared_Book_$setPrice__Lcom_exampleproject_model_shared_Book_2FV(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_FLOAT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'price'))), new java_lang_Float_Float__FV(0)), 35).java_lang_Float_value);
  com_exampleproject_model_shared_Book_$setQty__Lcom_exampleproject_model_shared_Book_2IV(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'qty'))), java_lang_Integer_valueOf__ILjava_lang_Integer_2(0)), 21).java_lang_Integer_value);
  com_exampleproject_model_shared_Book_$setPhotoUrl__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'photoUrl'))), null)));
  com_exampleproject_model_shared_Book_$setGenres__Lcom_exampleproject_model_shared_Book_2Ljava_util_Set_2V(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toSet__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_Set_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'genres'), (com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_INSTANCE)), null), 48));
  com_exampleproject_model_shared_Book_$setAuthors__Lcom_exampleproject_model_shared_Book_2Ljava_util_Set_2V(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toSet__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_Set_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'authors'), (com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_INSTANCE)), null), 48));
  return rc;
}

function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_2Lcom_exampleproject_model_shared_Book_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  var rc;
  if (!value_0) {
    return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_Defaults_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  rc = new com_google_gwt_json_client_JSONObject_JSONObject__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , java_lang_Integer_valueOf__ILjava_lang_Integer_2(value_0.com_exampleproject_model_shared_Book_id))), rc, 'id');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , value_0.com_exampleproject_model_shared_Book_title)), rc, 'title');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , value_0.com_exampleproject_model_shared_Book_publisher)), rc, 'publisher');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , java_lang_Integer_valueOf__ILjava_lang_Integer_2(value_0.com_exampleproject_model_shared_Book_pages))), rc, 'pages');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , value_0.com_exampleproject_model_shared_Book_description)), rc, $intern_25);
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_FLOAT , new java_lang_Float_Float__FV(value_0.com_exampleproject_model_shared_Book_price))), rc, 'price');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , java_lang_Integer_valueOf__ILjava_lang_Integer_2(value_0.com_exampleproject_model_shared_Book_qty))), rc, 'qty');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , value_0.com_exampleproject_model_shared_Book_photoUrl)), rc, 'photoUrl');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toJSON__Ljava_util_Collection_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Lcom_google_gwt_json_client_JSONValue_2(value_0.com_exampleproject_model_shared_Book_genres, (com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_INSTANCE)), rc, 'genres');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toJSON__Ljava_util_Collection_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Lcom_google_gwt_json_client_JSONValue_2(value_0.com_exampleproject_model_shared_Book_authors, (com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Author_1Generated_1JsonEncoderDecoder_1_INSTANCE)), rc, 'authors');
  return rc;
}

function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_Book_1Generated_1JsonEncoderDecoder_1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(239, 301, {}, com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_Book_1Generated_1JsonEncoderDecoder_1__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Book_2(value_0);
}
;
_.encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2 = function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_2Lcom_exampleproject_model_shared_Book_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 57));
}
;
var com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Book_11Generated_11JsonEncoderDecoder_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Book_Generated_JsonEncoderDecoder_', 239);
function com_exampleproject_model_shared_Genre_$setGenre__Lcom_exampleproject_model_shared_Genre_2Ljava_lang_String_2V(this$static, genre){
  this$static.com_exampleproject_model_shared_Genre_genre = genre;
}

function com_exampleproject_model_shared_Genre_$setId__Lcom_exampleproject_model_shared_Genre_2IV(this$static, id_0){
  this$static.com_exampleproject_model_shared_Genre_id = id_0;
}

function com_exampleproject_model_shared_Genre_Genre__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(68, 1, {68:1}, com_exampleproject_model_shared_Genre_Genre__V);
_.toString__Ljava_lang_String_2 = function com_exampleproject_model_shared_Genre_toString__Ljava_lang_String_2(){
  return "Genre{genre='" + this.com_exampleproject_model_shared_Genre_genre + "'" + '}';
}
;
_.com_exampleproject_model_shared_Genre_id = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Genre_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Genre', 68);
function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$clinit__V(){
  com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_INSTANCE = new com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_Genre_1Generated_1JsonEncoderDecoder_1__V;
}

function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Genre_2(value_0){
  var object, rc;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  object = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0);
  rc = new com_exampleproject_model_shared_Genre_Genre__V;
  com_exampleproject_model_shared_Genre_$setId__Lcom_exampleproject_model_shared_Genre_2IV(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'id'))), java_lang_Integer_valueOf__ILjava_lang_Integer_2(0)), 21).java_lang_Integer_value);
  com_exampleproject_model_shared_Genre_$setGenre__Lcom_exampleproject_model_shared_Genre_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'genre'))), null)));
  return rc;
}

function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_2Lcom_exampleproject_model_shared_Genre_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  var rc;
  if (!value_0) {
    return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_Defaults_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  rc = new com_google_gwt_json_client_JSONObject_JSONObject__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , java_lang_Integer_valueOf__ILjava_lang_Integer_2(value_0.com_exampleproject_model_shared_Genre_id))), rc, 'id');
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , value_0.com_exampleproject_model_shared_Genre_genre)), rc, 'genre');
  return rc;
}

function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_Genre_1Generated_1JsonEncoderDecoder_1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(240, 301, {}, com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_Genre_1Generated_1JsonEncoderDecoder_1__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Genre_2(value_0);
}
;
_.encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2 = function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_2Lcom_exampleproject_model_shared_Genre_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 68));
}
;
var com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Genre_11Generated_11JsonEncoderDecoder_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'Genre_Generated_JsonEncoderDecoder_', 240);
function com_exampleproject_model_shared_User_$setLogin__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(this$static, login){
  this$static.com_exampleproject_model_shared_User_login = login;
}

function com_exampleproject_model_shared_User_$setName__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(this$static, name_0){
  this$static.com_exampleproject_model_shared_User_name = name_0;
}

function com_exampleproject_model_shared_User_$setPassword__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(this$static, password){
  this$static.com_exampleproject_model_shared_User_password = password;
}

function com_exampleproject_model_shared_User_$setRole__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(this$static, role){
  this$static.com_exampleproject_model_shared_User_role = role;
}

function com_exampleproject_model_shared_User_$setSurname__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(this$static, surname){
  this$static.com_exampleproject_model_shared_User_surname = surname;
}

function com_exampleproject_model_shared_User_User__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(84, 1, {84:1}, com_exampleproject_model_shared_User_User__V);
_.toString__Ljava_lang_String_2 = function com_exampleproject_model_shared_User_toString__Ljava_lang_String_2(){
  return "User{, role='" + this.com_exampleproject_model_shared_User_role + "'" + ", name='" + this.com_exampleproject_model_shared_User_name + "'" + ", surname='" + this.com_exampleproject_model_shared_User_surname + "'" + ", login='" + this.com_exampleproject_model_shared_User_login + "'" + ', password=' + this.com_exampleproject_model_shared_User_password + '}';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1User_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'User', 84);
function com_exampleproject_model_shared_User_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_User_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_User_2(value_0){
  var object, rc;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  object = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0);
  rc = new com_exampleproject_model_shared_User_User__V;
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'id')), java_lang_Integer_valueOf__ILjava_lang_Integer_2(0)), 21);
  com_exampleproject_model_shared_User_$setRole__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'role')), null)));
  com_exampleproject_model_shared_User_$setName__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'name')), null)));
  com_exampleproject_model_shared_User_$setSurname__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_24)), null)));
  com_exampleproject_model_shared_User_$setLogin__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'login')), null)));
  com_exampleproject_model_shared_User_$setPassword__Lcom_exampleproject_model_shared_User_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'password')), null)));
  return rc;
}

function com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static){
  if (!this$static.com_google_gwt_animation_client_Animation_isRunning) {
    return;
  }
  this$static.com_google_gwt_animation_client_Animation_wasStarted = this$static.com_google_gwt_animation_client_Animation_isStarted;
  this$static.com_google_gwt_animation_client_Animation_element = null;
  this$static.com_google_gwt_animation_client_Animation_isRunning = false;
  this$static.com_google_gwt_animation_client_Animation_isStarted = false;
  if (this$static.com_google_gwt_animation_client_Animation_requestHandle) {
    this$static.com_google_gwt_animation_client_Animation_requestHandle.cancel__V();
    this$static.com_google_gwt_animation_client_Animation_requestHandle = null;
  }
  this$static.com_google_gwt_animation_client_Animation_wasStarted && com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
}

function com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2DZ(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.com_google_gwt_animation_client_Animation_runId;
  finished = curTime >= this$static.com_google_gwt_animation_client_Animation_startTime + this$static.com_google_gwt_animation_client_Animation_duration;
  if (this$static.com_google_gwt_animation_client_Animation_isStarted && !finished) {
    progress = (curTime - this$static.com_google_gwt_animation_client_Animation_startTime) / this$static.com_google_gwt_animation_client_Animation_duration;
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2DV(this$static, (1 + $wnd.Math.cos($intern_26 + progress * $intern_26)) / 2);
    return this$static.com_google_gwt_animation_client_Animation_isRunning && this$static.com_google_gwt_animation_client_Animation_runId == curRunId;
  }
  if (!this$static.com_google_gwt_animation_client_Animation_isStarted && curTime >= this$static.com_google_gwt_animation_client_Animation_startTime) {
    this$static.com_google_gwt_animation_client_Animation_isStarted = true;
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight = com_google_gwt_user_client_ui_PopupPanel_$getOffsetHeight__Lcom_google_gwt_user_client_ui_PopupPanel_2I(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth = com_google_gwt_user_client_ui_PopupPanel_$getOffsetWidth__Lcom_google_gwt_user_client_ui_PopupPanel_2I(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_27] = 'hidden';
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2DV(this$static, (1 + $wnd.Math.cos($intern_26)) / 2);
    if (!(this$static.com_google_gwt_animation_client_Animation_isRunning && this$static.com_google_gwt_animation_client_Animation_runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.com_google_gwt_animation_client_Animation_isRunning = false;
    this$static.com_google_gwt_animation_client_Animation_isStarted = false;
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
    return false;
  }
  return true;
}

function com_google_gwt_animation_client_Animation_Animation__Lcom_google_gwt_animation_client_AnimationScheduler_2V(scheduler){
  this.com_google_gwt_animation_client_Animation_callback = new com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V(this);
  this.com_google_gwt_animation_client_Animation_scheduler = scheduler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(110, 1, {});
_.com_google_gwt_animation_client_Animation_duration = -1;
_.com_google_gwt_animation_client_Animation_isRunning = false;
_.com_google_gwt_animation_client_Animation_isStarted = false;
_.com_google_gwt_animation_client_Animation_runId = -1;
_.com_google_gwt_animation_client_Animation_startTime = -1;
_.com_google_gwt_animation_client_Animation_wasStarted = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'Animation', 110);
function com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this$static, timestamp){
  com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2DZ(this$static.com_google_gwt_animation_client_Animation$1_this$01, timestamp)?(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_requestHandle = this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_scheduler.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_callback, this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_element)):(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_requestHandle = null);
}

function com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V(this$0){
  this.com_google_gwt_animation_client_Animation$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(251, 1, {}, com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V);
_.execute__DV = function com_google_gwt_animation_client_Animation$1_execute__DV(timestamp){
  com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this, timestamp);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'Animation/1', 251);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(304, 1, {});
var com_google_gwt_animation_client_AnimationScheduler_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationScheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'AnimationScheduler', 304);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(89, 1, {89:1});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationScheduler$AnimationHandle_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'AnimationScheduler/AnimationHandle', 89);
function com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V(){
}

function com_google_gwt_animation_client_AnimationSchedulerImplStandard_cancelImpl__Lcom_google_gwt_core_client_JavaScriptObject_2V(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestImpl__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_core_client_JavaScriptObject_2(cb, element){
  var callback = $entry(function(){
    var time = com_google_gwt_core_client_JsDate_now__D();
    cb.execute__DV(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(266, 304, {}, com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V);
_.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2 = function com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(callback, element){
  var handle;
  handle = com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestImpl__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_core_client_JavaScriptObject_2(callback, element);
  return new com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V(handle);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplStandard_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'AnimationSchedulerImplStandard', 266);
function com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V(val$handle){
  this.com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_val$handle2 = val$handle;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(267, 89, {89:1}, com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V);
_.cancel__V = function com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_cancel__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplStandard_cancelImpl__Lcom_google_gwt_core_client_JavaScriptObject_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_val$handle2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplStandard$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'AnimationSchedulerImplStandard/1', 267);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer_$cancelAnimationFrame__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2V(this$static, requestId){
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
  this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length == 0 && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer);
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer_$updateAnimations__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$AnimationHandleImpl_12_1classLit, {315:1, 3:1}, 90, this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length, 0, 1);
  curAnimations = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, curAnimations), 315);
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
    com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(requestId.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback, duration.com_google_gwt_core_client_Duration_start);
  }
  this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer, java_lang_Math_max__III(16 - (com_google_gwt_core_client_JsDate_now__D() - duration.com_google_gwt_core_client_Duration_start)));
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V(){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer = new com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(268, 304, {}, com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V);
_.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2 = function com_google_gwt_animation_client_AnimationSchedulerImplTimer_requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(callback, element){
  var requestId;
  requestId = new com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V(this, callback);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length == 1 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer, 16);
  return requestId;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'AnimationSchedulerImplTimer', 268);
function com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static){
  if (!this$static.com_google_gwt_user_client_Timer_timerId) {
    return;
  }
  ++this$static.com_google_gwt_user_client_Timer_cancelCounter;
  this$static.com_google_gwt_user_client_Timer_isRepeating?com_google_gwt_user_client_Timer_clearInterval__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value):com_google_gwt_user_client_Timer_clearTimeout__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value);
  this$static.com_google_gwt_user_client_Timer_timerId = null;
}

function com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static, delayMillis){
  if (delayMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('must be non-negative'));
  }
  !!this$static.com_google_gwt_user_client_Timer_timerId && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static);
  this$static.com_google_gwt_user_client_Timer_isRepeating = false;
  this$static.com_google_gwt_user_client_Timer_timerId = java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(this$static, this$static.com_google_gwt_user_client_Timer_cancelCounter), delayMillis));
}

function com_google_gwt_user_client_Timer_Timer__V(){
}

function com_google_gwt_user_client_Timer_clearInterval__IV(timerId){
  $wnd.clearInterval(timerId);
}

function com_google_gwt_user_client_Timer_clearTimeout__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(timer, cancelCounter){
  return $entry(function(){
    timer.package_private$com_google_gwt_user_client$fire__IV(cancelCounter);
  }
  );
}

function com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(func, time){
  return $wnd.setTimeout(func, time);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(106, 1, {});
_.package_private$com_google_gwt_user_client$fire__IV = function com_google_gwt_user_client_Timer_fire__IV(scheduleCancelCounter){
  if (scheduleCancelCounter != this.com_google_gwt_user_client_Timer_cancelCounter) {
    return;
  }
  this.com_google_gwt_user_client_Timer_isRepeating || (this.com_google_gwt_user_client_Timer_timerId = null);
  this.run__V();
}
;
_.com_google_gwt_user_client_Timer_cancelCounter = 0;
_.com_google_gwt_user_client_Timer_isRepeating = false;
_.com_google_gwt_user_client_Timer_timerId = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'Timer', 106);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this$0){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$01 = this$0;
  com_google_gwt_user_client_Timer_Timer__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(269, 106, {}, com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V);
_.run__V = function com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_run__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplTimer_$updateAnimations__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'AnimationSchedulerImplTimer/1', 269);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V(this$0, callback){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$01 = this$0;
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback = callback;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(90, 89, {89:1, 90:1}, com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V);
_.cancel__V = function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_cancel__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplTimer_$cancelAnimationFrame__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$01, this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$AnimationHandleImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'AnimationSchedulerImplTimer/AnimationHandleImpl', 90);
function com_google_gwt_core_client_Duration_Duration__V(){
  this.com_google_gwt_core_client_Duration_start = com_google_gwt_core_client_JsDate_now__D();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(99, 1, {}, com_google_gwt_core_client_Duration_Duration__V);
_.com_google_gwt_core_client_Duration_start = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Duration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_30, 'Duration', 99);
function java_lang_Throwable_$addSuppressed__Ljava_lang_Throwable_2Ljava_lang_Throwable_2V(this$static, exception){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(exception);
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.java_lang_Throwable_disableSuppression) {
    return;
  }
  this$static.java_lang_Throwable_suppressedExceptions == null?(this$static.java_lang_Throwable_suppressedExceptions = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit, 1), $intern_17, 4, 0, [exception])):(this$static.java_lang_Throwable_suppressedExceptions[this$static.java_lang_Throwable_suppressedExceptions.length] = exception);
}

function java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static){
  this$static.java_lang_Throwable_writetableStackTrace && this$static.java_lang_Throwable_backingJsObject !== $intern_31 && this$static.private$java_lang_Throwable$initializeBackingError__V();
  return this$static;
}

function java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static, cause){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZLjava_lang_Object_2V(!this$static.java_lang_Throwable_cause);
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(true, 'Self-causation not permitted');
  this$static.java_lang_Throwable_cause = cause;
  return this$static;
}

function java_lang_Throwable_$setBackingJsObject__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this$static, backingJsObject){
  this$static.java_lang_Throwable_backingJsObject = backingJsObject;
  backingJsObject != null && javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(backingJsObject, $intern_32, this$static);
}

function java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(this$static, message){
  var className;
  className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static.java_lang_Object__1_1_1clazz);
  return message == null?className:className + ': ' + message;
}

function java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  this.java_lang_Throwable_cause = cause;
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

function java_lang_Throwable_fixIE__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(4, 1, $intern_33);
_.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2 = function java_lang_Throwable_createError__Ljava_lang_String_2Ljava_lang_Object_2(msg){
  return new $wnd.Error(msg);
}
;
_.getMessage__Ljava_lang_String_2 = function java_lang_Throwable_getMessage__Ljava_lang_String_2(){
  return this.java_lang_Throwable_detailMessage;
}
;
_.private$java_lang_Throwable$initializeBackingError__V = function java_lang_Throwable_initializeBackingError__V(){
  var className, errorMessage, message;
  message = this.java_lang_Throwable_detailMessage == null?null:this.java_lang_Throwable_detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this.java_lang_Object__1_1_1clazz) , message == null?className:className + ': ' + message);
  java_lang_Throwable_$setBackingJsObject__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, java_lang_Throwable_fixIE__Ljava_lang_Object_2Ljava_lang_Object_2(this.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2(errorMessage)));
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Throwable_toString__Ljava_lang_String_2(){
  return java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(this, this.getMessage__Ljava_lang_String_2());
}
;
_.java_lang_Throwable_backingJsObject = $intern_31;
_.java_lang_Throwable_disableSuppression = false;
_.java_lang_Throwable_writetableStackTrace = true;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Throwable', 4);
function java_lang_Exception_Exception__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(44, 4, $intern_33);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Exception', 44);
function java_lang_RuntimeException_RuntimeException__V(){
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(15, 44, $intern_33, java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'RuntimeException', 15);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(75, 15, $intern_33);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1JsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JsException', 75);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(120, 75, $intern_33);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JavaScriptExceptionBase', 120);
function com_google_gwt_core_client_JavaScriptException_$clinit__V(){
  com_google_gwt_core_client_JavaScriptException_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_JavaScriptException_NOT_1SET = new java_lang_Object_Object__V;
}

function com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this$static){
  var exception;
  if (this$static.com_google_gwt_core_client_JavaScriptException_message == null) {
    exception = com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this$static.com_google_gwt_core_client_JavaScriptException_e;
    this$static.com_google_gwt_core_client_JavaScriptException_name = exception == null?$intern_35:com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(exception)?'String':java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(exception));
    this$static.com_google_gwt_core_client_JavaScriptException_description = this$static.com_google_gwt_core_client_JavaScriptException_description + ': ' + (com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):exception + '');
    this$static.com_google_gwt_core_client_JavaScriptException_message = '(' + this$static.com_google_gwt_core_client_JavaScriptException_name + ') ' + this$static.com_google_gwt_core_client_JavaScriptException_description;
  }
}

function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_JavaScriptException_$clinit__V();
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.java_lang_Throwable_backingJsObject = e;
  e != null && javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(e, $intern_32, this);
  this.java_lang_Throwable_detailMessage = e == null?$intern_35:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(e);
  this.com_google_gwt_core_client_JavaScriptException_description = '';
  this.com_google_gwt_core_client_JavaScriptException_e = e;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
}

function com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.message;
}

function com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.name;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(33, 120, {33:1, 3:1, 4:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getMessage__Ljava_lang_String_2 = function com_google_gwt_core_client_JavaScriptException_getMessage__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this) , this.com_google_gwt_core_client_JavaScriptException_message;
}
;
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_30, 'JavaScriptException', 33);
function com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(other);
}

function com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this$static);
}

var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_30, 'JavaScriptObject$', 0);
function com_google_gwt_core_client_JsDate_now__D(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(c, escapeTable){
  var lookedUp = com_google_gwt_core_client_JsonUtils_escapeTable[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return s;
}

function com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  !com_google_gwt_core_client_JsonUtils_escapeTable && (com_google_gwt_core_client_JsonUtils_escapeTable = com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2());
  return com_google_gwt_core_client_JsonUtils_escapeTable;
}

function com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var com_google_gwt_core_client_JsonUtils_escapeTable;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(271, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_30, 'Scheduler', 271);
function com_google_gwt_core_client_impl_Impl_$clinit__V(){
  com_google_gwt_core_client_impl_Impl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  !!(com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , com_google_gwt_core_client_impl_StackTraceCreator_collector);
}

function com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var _;
}

function com_google_gwt_core_client_impl_Impl_enter__Z(){
  var now_0;
  if (com_google_gwt_core_client_impl_Impl_entryDepth != 0) {
    now_0 = com_google_gwt_core_client_JsDate_now__D();
    if (now_0 - com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled > 2000) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = now_0;
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = $wnd.setTimeout(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V, 10);
    }
  }
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  return function(){
    return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    var _;
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
  }
   finally {
    com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry);
  }
}

function com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry){
  initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
  --com_google_gwt_core_client_impl_Impl_entryDepth;
  if (initialEntry) {
    if (com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId != -1) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId);
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
    }
  }
}

function com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2(){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  var s = $doc.location.href;
  var i = s.indexOf('#');
  i != -1 && (s = s.substring(0, i));
  i = s.indexOf('?');
  i != -1 && (s = s.substring(0, i));
  i = s.lastIndexOf('/');
  i != -1 && (s = s.substring(0, i));
  return s.length > 0?s + '/':'';
}

function com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V(){
  com_google_gwt_core_client_impl_Impl_entryDepth != 0 && (com_google_gwt_core_client_impl_Impl_entryDepth = 0);
  com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldDeferred;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands) {
    oldDeferred = this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands;
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = null;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = []);
    com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldDeferred, this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
  }
  !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands));
}

function com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this$static){
  return !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands || !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  if (!this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning) {
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = true;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher = new com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue = new com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue, 50);
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  while (com_google_gwt_core_client_JsDate_now__D() - duration.com_google_gwt_core_client_Duration_start < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute__Z()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands, [cmd, false]);
  com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static);
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z(cmd){
  return cmd.execute__Z();
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute__Z() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):t[0].execute__V();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_$clinit__V();
        com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 33)?com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 33).getThrown__Ljava_lang_Object_2():e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  return rescheduled;
}

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  function callback(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(136, 271, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
_.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
_.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = false;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'SchedulerImpl', 136);
function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(137, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Flusher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'SchedulerImpl/Flusher', 137);
function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(138, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Rescuer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'SchedulerImpl/Rescuer', 138);
function com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  var c, enforceLegacy;
  enforceLegacy = !com_google_gwt_core_client_impl_StackTraceCreator_supportsErrorStack__Z();
  c = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V;
  com_google_gwt_core_client_impl_StackTraceCreator_collector = enforceLegacy?new com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V:c;
}

function com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(error){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  com_google_gwt_core_client_impl_StackTraceCreator_collector.collect__Ljava_lang_Object_2V(error);
}

function com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function com_google_gwt_core_client_impl_StackTraceCreator_supportsErrorStack__Z(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var com_google_gwt_core_client_impl_StackTraceCreator_collector;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(283, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'StackTraceCreator/Collector', 283);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(121, 283, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
_.collect__Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_collect__Ljava_lang_Object_2V(error){
  var seen = {}, com_google_gwt_core_client_impl_StackTraceCreator_getFunctionName__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2_name_0;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , callee.name || (callee.name = com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'StackTraceCreator/CollectorLegacy', 121);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(284, 283, {});
_.collect__Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_collect__Ljava_lang_Object_2V(error){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'StackTraceCreator/CollectorModern', 284);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(122, 284, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'StackTraceCreator/CollectorModernNoSourceMap', 122);
function com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild){
  return this$static.appendChild(newChild);
}

function com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function com_google_gwt_dom_client_Node_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function com_google_gwt_dom_client_Element_$addClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static, className){
  var idx, oldClassName;
  className = com_google_gwt_dom_client_Element_trimClassName__Ljava_lang_String_2Ljava_lang_String_2(className);
  oldClassName = this$static.className || '';
  idx = com_google_gwt_dom_client_Element_indexOfName__Ljava_lang_String_2Ljava_lang_String_2I(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function com_google_gwt_dom_client_Element_$getAbsoluteLeft__Lcom_google_gwt_dom_client_Element_2I(this$static){
  var doc;
  return doc = this$static.ownerDocument , com_google_gwt_dom_client_DOMImplTrident_$getBoundingClientRectLeft__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2I(this$static) + com_google_gwt_dom_client_DOMImplIE8_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE8_2Lcom_google_gwt_dom_client_Element_2I(java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(doc.compatMode, $intern_36)?doc.documentElement:doc.body);
}

function com_google_gwt_dom_client_Element_$getAbsoluteTop__Lcom_google_gwt_dom_client_Element_2I(this$static){
  var doc;
  return doc = this$static.ownerDocument , com_google_gwt_dom_client_DOMImplTrident_$getBoundingClientRectTop__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2I(this$static) + (((java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(doc.compatMode, $intern_36)?doc.documentElement:doc.body).scrollTop || 0) | 0);
}

function com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function com_google_gwt_dom_client_Element_$removeClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = com_google_gwt_dom_client_Element_trimClassName__Ljava_lang_String_2Ljava_lang_String_2(className);
  oldStyle = this$static.className || '';
  idx = com_google_gwt_dom_client_Element_indexOfName__Ljava_lang_String_2Ljava_lang_String_2I(oldStyle, className);
  if (idx != -1) {
    begin = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(oldStyle.substr(0, idx));
    end = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(java_lang_String_$substring__Ljava_lang_String_2ILjava_lang_String_2(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function com_google_gwt_dom_client_Element_$setTabIndex__Lcom_google_gwt_dom_client_Element_2IV(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function com_google_gwt_dom_client_Element_indexOfName__Ljava_lang_String_2Ljava_lang_String_2I(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function com_google_gwt_dom_client_Element_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(o){
  if (com_google_gwt_dom_client_Node_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function com_google_gwt_dom_client_Element_trimClassName__Ljava_lang_String_2Ljava_lang_String_2(className){
  className = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(className);
  return className;
}

function com_google_gwt_dom_client_DOMImpl_$createScriptElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2(doc, source){
  var elem;
  elem = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(doc, 'script');
  elem.text = source;
  return elem;
}

function com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement($intern_15)) , doc.__gwt_container);
    container.innerHTML = '<' + tagName + '/>' || '';
    elem = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function com_google_gwt_dom_client_DOMImplTrident_$dispatchEvent__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_NativeEvent_2V(target, evt){
  target.fireEvent('on' + evt.type, evt);
}

function com_google_gwt_dom_client_DOMImplTrident_$getBoundingClientRectLeft__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2I(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function com_google_gwt_dom_client_DOMImplTrident_$getBoundingClientRectTop__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2I(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function com_google_gwt_dom_client_DOMImplTrident_$getTagName__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}

function com_google_gwt_dom_client_DOMImplTrident_$selectAdd__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_SelectElement_2Lcom_google_gwt_dom_client_OptionElement_2Lcom_google_gwt_dom_client_OptionElement_2V(select, option, before){
  before?select.add(option, before.index):select.add(option);
}

function com_google_gwt_dom_client_DOMImplTrident_$setInnerText__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, text_0){
  elem.innerText = text_0 || '';
}

function com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

var com_google_gwt_dom_client_DOMImplTrident_currentEventTarget;
function com_google_gwt_dom_client_DOMImplIE8_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE8_2Lcom_google_gwt_dom_client_Element_2I(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return -((elem.scrollLeft || 0) | 0);
  }
  return (elem.scrollLeft || 0) | 0;
}

function com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function com_google_gwt_dom_client_Document_$getBodyOffsetLeft__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_36)?this$static.documentElement:this$static.body).clientLeft;
}

function com_google_gwt_dom_client_Document_$getBodyOffsetTop__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_36)?this$static.documentElement:this$static.body).clientTop;
}

function com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_36)?this$static.documentElement:this$static.body).clientHeight | 0;
}

function com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_36)?this$static.documentElement:this$static.body).clientWidth | 0;
}

function com_google_gwt_dom_client_Document_$getScrollHeight__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return ((java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_36)?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function com_google_gwt_dom_client_Document_$getScrollLeft__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return com_google_gwt_dom_client_DOMImplIE8_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE8_2Lcom_google_gwt_dom_client_Element_2I(java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_36)?this$static.documentElement:this$static.body);
}

function com_google_gwt_dom_client_Document_$getScrollTop__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return ((java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_36)?this$static.documentElement:this$static.body).scrollTop || 0) | 0;
}

function com_google_gwt_dom_client_Document_$getScrollWidth__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return ((java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_36)?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function com_google_gwt_dom_client_ImageElement_$setSrc__Lcom_google_gwt_dom_client_ImageElement_2Ljava_lang_String_2V(this$static, src_0){
  this$static.src = src_0;
}

function com_google_gwt_dom_client_InputElement_$setChecked__Lcom_google_gwt_dom_client_InputElement_2ZV(this$static, checked){
  this$static.checked = checked;
}

function com_google_gwt_dom_client_InputElement_$setDefaultChecked__Lcom_google_gwt_dom_client_InputElement_2ZV(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function com_google_gwt_dom_client_LabelElement_$setHtmlFor__Lcom_google_gwt_dom_client_LabelElement_2Ljava_lang_String_2V(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function java_lang_Enum_Enum__Ljava_lang_String_2IV(name_0, ordinal){
  this.java_lang_Enum_name = name_0;
  this.java_lang_Enum_ordinal = ordinal;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(5, 1, {3:1, 6:1, 5:1});
_.equals__Ljava_lang_Object_2Z = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I = function java_lang_Enum_hashCode__I(){
  return javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Enum_toString__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.java_lang_Enum_ordinal = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Enum', 5);
function com_google_gwt_dom_client_Style$Display_$clinit__V(){
  com_google_gwt_dom_client_Style$Display_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_Style$Display_NONE = new com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_BLOCK = new com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE = new com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK = new com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1TABLE = new com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_LIST_1ITEM = new com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_RUN_1IN = new com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE = new com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION = new com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP = new com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP = new com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP = new com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP = new com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1CELL = new com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN = new com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1ROW = new com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INITIAL = new com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_FLEX = new com_google_gwt_dom_client_Style$Display$18_Style$Display$18__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1FLEX = new com_google_gwt_dom_client_Style$Display$19_Style$Display$19__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Display_values___3Lcom_google_gwt_dom_client_Style$Display_2(){
  com_google_gwt_dom_client_Style$Display_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display_12_1classLit, 1), $intern_17, 8, 0, [com_google_gwt_dom_client_Style$Display_NONE, com_google_gwt_dom_client_Style$Display_BLOCK, com_google_gwt_dom_client_Style$Display_INLINE, com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK, com_google_gwt_dom_client_Style$Display_INLINE_1TABLE, com_google_gwt_dom_client_Style$Display_LIST_1ITEM, com_google_gwt_dom_client_Style$Display_RUN_1IN, com_google_gwt_dom_client_Style$Display_TABLE, com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1CELL, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN, com_google_gwt_dom_client_Style$Display_TABLE_1ROW, com_google_gwt_dom_client_Style$Display_INITIAL, com_google_gwt_dom_client_Style$Display_FLEX, com_google_gwt_dom_client_Style$Display_INLINE_1FLEX]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(8, 5, $intern_37);
var com_google_gwt_dom_client_Style$Display_BLOCK, com_google_gwt_dom_client_Style$Display_FLEX, com_google_gwt_dom_client_Style$Display_INITIAL, com_google_gwt_dom_client_Style$Display_INLINE, com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK, com_google_gwt_dom_client_Style$Display_INLINE_1FLEX, com_google_gwt_dom_client_Style$Display_INLINE_1TABLE, com_google_gwt_dom_client_Style$Display_LIST_1ITEM, com_google_gwt_dom_client_Style$Display_NONE, com_google_gwt_dom_client_Style$Display_RUN_1IN, com_google_gwt_dom_client_Style$Display_TABLE, com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION, com_google_gwt_dom_client_Style$Display_TABLE_1CELL, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1ROW, com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display', 8, com_google_gwt_dom_client_Style$Display_values___3Lcom_google_gwt_dom_client_Style$Display_2);
function com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'NONE', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(172, 8, $intern_37, com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/1', 172, null);
function com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_COLUMN_GROUP', 9);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(181, 8, $intern_37, com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$10_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/10', 181, null);
function com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_HEADER_GROUP', 10);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(182, 8, $intern_37, com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$11_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/11', 182, null);
function com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_FOOTER_GROUP', 11);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(183, 8, $intern_37, com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$12_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/12', 183, null);
function com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_ROW_GROUP', 12);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(184, 8, $intern_37, com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$13_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/13', 184, null);
function com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_CELL', 13);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(185, 8, $intern_37, com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$14_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/14', 185, null);
function com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_COLUMN', 14);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(186, 8, $intern_37, com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$15_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/15', 186, null);
function com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_ROW', 15);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(187, 8, $intern_37, com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$16_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/16', 187, null);
function com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INITIAL', 16);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(188, 8, $intern_37, com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$17_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/17', 188, null);
function com_google_gwt_dom_client_Style$Display$18_Style$Display$18__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'FLEX', 17);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(189, 8, $intern_37, com_google_gwt_dom_client_Style$Display$18_Style$Display$18__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$18_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/18', 189, null);
function com_google_gwt_dom_client_Style$Display$19_Style$Display$19__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE_FLEX', 18);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(190, 8, $intern_37, com_google_gwt_dom_client_Style$Display$19_Style$Display$19__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$19_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/19', 190, null);
function com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'BLOCK', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(173, 8, $intern_37, com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/2', 173, null);
function com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(174, 8, $intern_37, com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/3', 174, null);
function com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE_BLOCK', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(175, 8, $intern_37, com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/4', 175, null);
function com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE_TABLE', 4);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(176, 8, $intern_37, com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$5_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/5', 176, null);
function com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'LIST_ITEM', 5);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(177, 8, $intern_37, com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$6_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/6', 177, null);
function com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'RUN_IN', 6);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(178, 8, $intern_37, com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$7_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/7', 178, null);
function com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE', 7);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(179, 8, $intern_37, com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$8_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/8', 179, null);
function com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_CAPTION', 8);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(180, 8, $intern_37, com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$9_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Display/9', 180, null);
function com_google_gwt_dom_client_Style$TextAlign_$clinit__V(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_Style$TextAlign_CENTER = new com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_JUSTIFY = new com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_LEFT = new com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_RIGHT = new com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit, 1), $intern_17, 29, 0, [com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(29, 5, $intern_39);
var com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/TextAlign', 29, com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2);
function com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(191, 29, $intern_39, com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/TextAlign/1', 191, null);
function com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(192, 29, $intern_39, com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/TextAlign/2', 192, null);
function com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(193, 29, $intern_39, com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/TextAlign/3', 193, null);
function com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(194, 29, $intern_39, com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/TextAlign/4', 194, null);
function com_google_gwt_dom_client_Style$Unit_$clinit__V(){
  com_google_gwt_dom_client_Style$Unit_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_Style$Unit_PX = new com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PCT = new com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_EM = new com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_EX = new com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PT = new com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PC = new com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_IN = new com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_CM = new com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_MM = new com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Unit_values___3Lcom_google_gwt_dom_client_Style$Unit_2(){
  com_google_gwt_dom_client_Style$Unit_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit_12_1classLit, 1), $intern_17, 17, 0, [com_google_gwt_dom_client_Style$Unit_PX, com_google_gwt_dom_client_Style$Unit_PCT, com_google_gwt_dom_client_Style$Unit_EM, com_google_gwt_dom_client_Style$Unit_EX, com_google_gwt_dom_client_Style$Unit_PT, com_google_gwt_dom_client_Style$Unit_PC, com_google_gwt_dom_client_Style$Unit_IN, com_google_gwt_dom_client_Style$Unit_CM, com_google_gwt_dom_client_Style$Unit_MM]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(17, 5, $intern_40);
var com_google_gwt_dom_client_Style$Unit_CM, com_google_gwt_dom_client_Style$Unit_EM, com_google_gwt_dom_client_Style$Unit_EX, com_google_gwt_dom_client_Style$Unit_IN, com_google_gwt_dom_client_Style$Unit_MM, com_google_gwt_dom_client_Style$Unit_PC, com_google_gwt_dom_client_Style$Unit_PCT, com_google_gwt_dom_client_Style$Unit_PT, com_google_gwt_dom_client_Style$Unit_PX;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit', 17, com_google_gwt_dom_client_Style$Unit_values___3Lcom_google_gwt_dom_client_Style$Unit_2);
function com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PX', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(163, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/1', 163, null);
function com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PCT', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(164, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/2', 164, null);
function com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'EM', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(165, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/3', 165, null);
function com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'EX', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(166, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/4', 166, null);
function com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PT', 4);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(167, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$5_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/5', 167, null);
function com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PC', 5);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(168, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$6_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/6', 168, null);
function com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'IN', 6);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(169, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$7_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/7', 169, null);
function com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'CM', 7);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(170, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$8_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/8', 170, null);
function com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'MM', 8);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(171, 17, $intern_40, com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$9_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_38, 'Style/Unit/9', 171, null);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(292, 1, {});
_.toString__Ljava_lang_String_2 = function com_google_web_bindery_event_shared_Event_toString__Ljava_lang_String_2(){
  return 'An event type';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Event', 292);
function com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(this$static, source){
  this$static.com_google_web_bindery_event_shared_Event_source = source;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(293, 292, {});
_.revive__V = function com_google_gwt_event_shared_GwtEvent_revive__V(){
  this.com_google_gwt_event_shared_GwtEvent_dead = false;
  this.com_google_web_bindery_event_shared_Event_source = null;
}
;
_.com_google_gwt_event_shared_GwtEvent_dead = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_42, 'GwtEvent', 293);
function com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(this$static, relativeElem){
  this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
}

function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    types = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, nativeEvent.type), 27);
    if (types) {
      for (type$iterator = types.iterator__Ljava_util_Iterator_2(); type$iterator.hasNext__Z();) {
        type_0 = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(type$iterator.next__Ljava_lang_Object_2(), 38);
        currentNative = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
        currentRelativeElem = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, nativeEvent);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, relativeElem);
        com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentNative);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentRelativeElem);
      }
    }
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(298, 293, {});
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return this.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2();
}
;
var com_google_gwt_event_dom_client_DomEvent_registered;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'DomEvent', 298);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(299, 298, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1HumanInputEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'HumanInputEvent', 299);
function com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2I(this$static){
  var doc, e, relativeElem;
  relativeElem = this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem;
  if (relativeElem) {
    return e = this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent , ((e.clientX || 0) | 0) - (doc = relativeElem.ownerDocument , com_google_gwt_dom_client_DOMImplTrident_$getBoundingClientRectLeft__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2I(relativeElem) + com_google_gwt_dom_client_DOMImplIE8_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE8_2Lcom_google_gwt_dom_client_Element_2I(java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(doc.compatMode, $intern_36)?doc.documentElement:doc.body)) + com_google_gwt_dom_client_DOMImplIE8_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE8_2Lcom_google_gwt_dom_client_Element_2I(relativeElem) + com_google_gwt_dom_client_Document_$getScrollLeft__Lcom_google_gwt_dom_client_Document_2I(relativeElem.ownerDocument);
  }
  return (this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent.clientX || 0) | 0;
}

function com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2I(this$static){
  var doc, e, relativeElem;
  relativeElem = this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem;
  if (relativeElem) {
    return e = this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent , ((e.clientY || 0) | 0) - (doc = relativeElem.ownerDocument , com_google_gwt_dom_client_DOMImplTrident_$getBoundingClientRectTop__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2I(relativeElem) + (((java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(doc.compatMode, $intern_36)?doc.documentElement:doc.body).scrollTop || 0) | 0)) + ((relativeElem.scrollTop || 0) | 0) + com_google_gwt_dom_client_Document_$getScrollTop__Lcom_google_gwt_dom_client_Document_2I(relativeElem.ownerDocument);
  }
  return (this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent.clientY || 0) | 0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(300, 299, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'MouseEvent', 300);
function com_google_gwt_event_dom_client_ClickEvent_$clinit__V(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('click', new com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
}

function com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(206, 300, {}, com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 72).onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(this);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_ClickEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_ClickEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1ClickEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'ClickEvent', 206);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(147, 1, {});
_.hashCode__I = function com_google_web_bindery_event_shared_Event$Type_hashCode__I(){
  return this.com_google_web_bindery_event_shared_Event$Type_index;
}
;
_.toString__Ljava_lang_String_2 = function com_google_web_bindery_event_shared_Event$Type_toString__Ljava_lang_String_2(){
  return 'Event type';
}
;
_.com_google_web_bindery_event_shared_Event$Type_index = 0;
var com_google_web_bindery_event_shared_Event$Type_nextHashCode = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'Event/Type', 147);
function com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V(){
  this.com_google_web_bindery_event_shared_Event$Type_index = ++com_google_web_bindery_event_shared_Event$Type_nextHashCode;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(46, 147, {}, com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_42, 'GwtEvent/Type', 46);
function com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(eventName, flyweight){
  var types;
  com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.call(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = new com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
  types = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, eventName), 27);
  if (!types) {
    types = new java_util_ArrayList_ArrayList__V;
    com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(com_google_gwt_event_dom_client_DomEvent_registered, eventName, types);
  }
  types.add__Ljava_lang_Object_2Z(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_name = eventName;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(38, 46, {38:1}, com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'DomEvent/Type', 38);
function com_google_gwt_event_dom_client_MouseDownEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseDownEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseDownEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mousedown', new com_google_gwt_event_dom_client_MouseDownEvent_MouseDownEvent__V);
}

function com_google_gwt_event_dom_client_MouseDownEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseDownEvent_2Lcom_google_gwt_event_dom_client_MouseDownHandler_2V(this$static, handler){
  com_google_gwt_user_client_ui_DialogBox_$beginDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseDownEvent_2V(handler.com_google_gwt_user_client_ui_DialogBox$MouseHandler_this$01, this$static);
}

function com_google_gwt_event_dom_client_MouseDownEvent_MouseDownEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(260, 300, {}, com_google_gwt_event_dom_client_MouseDownEvent_MouseDownEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseDownEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_dom_client_MouseDownEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseDownEvent_2Lcom_google_gwt_event_dom_client_MouseDownHandler_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 310));
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseDownEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseDownEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseDownEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseDownEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'MouseDownEvent', 260);
function com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseMoveEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mousemove', new com_google_gwt_event_dom_client_MouseMoveEvent_MouseMoveEvent__V);
}

function com_google_gwt_event_dom_client_MouseMoveEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseMoveEvent_2Lcom_google_gwt_event_dom_client_MouseMoveHandler_2V(this$static, handler){
  com_google_gwt_user_client_ui_DialogBox_$continueDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseMoveEvent_2V(handler.com_google_gwt_user_client_ui_DialogBox$MouseHandler_this$01, this$static);
}

function com_google_gwt_event_dom_client_MouseMoveEvent_MouseMoveEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(262, 300, {}, com_google_gwt_event_dom_client_MouseMoveEvent_MouseMoveEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseMoveEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_dom_client_MouseMoveEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseMoveEvent_2Lcom_google_gwt_event_dom_client_MouseMoveHandler_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 314));
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseMoveEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseMoveEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseMoveEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseMoveEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'MouseMoveEvent', 262);
function com_google_gwt_event_dom_client_MouseOutEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseOutEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseOutEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V($intern_12, new com_google_gwt_event_dom_client_MouseOutEvent_MouseOutEvent__V);
}

function com_google_gwt_event_dom_client_MouseOutEvent_MouseOutEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(264, 300, {}, com_google_gwt_event_dom_client_MouseOutEvent_MouseOutEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseOutEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 312);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseOutEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseOutEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseOutEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseOutEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'MouseOutEvent', 264);
function com_google_gwt_event_dom_client_MouseOverEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseOverEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseOverEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mouseover', new com_google_gwt_event_dom_client_MouseOverEvent_MouseOverEvent__V);
}

function com_google_gwt_event_dom_client_MouseOverEvent_MouseOverEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(263, 300, {}, com_google_gwt_event_dom_client_MouseOverEvent_MouseOverEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseOverEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 313);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseOverEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseOverEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseOverEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseOverEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'MouseOverEvent', 263);
function com_google_gwt_event_dom_client_MouseUpEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseUpEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseUpEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mouseup', new com_google_gwt_event_dom_client_MouseUpEvent_MouseUpEvent__V);
}

function com_google_gwt_event_dom_client_MouseUpEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseUpEvent_2Lcom_google_gwt_event_dom_client_MouseUpHandler_2V(this$static, handler){
  com_google_gwt_user_client_ui_DialogBox_$endDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseUpEvent_2V(handler.com_google_gwt_user_client_ui_DialogBox$MouseHandler_this$01, this$static);
}

function com_google_gwt_event_dom_client_MouseUpEvent_MouseUpEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(261, 300, {}, com_google_gwt_event_dom_client_MouseUpEvent_MouseUpEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseUpEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_dom_client_MouseUpEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseUpEvent_2Lcom_google_gwt_event_dom_client_MouseUpHandler_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 311));
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseUpEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseUpEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseUpEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseUpEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'MouseUpEvent', 261);
function com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.com_google_gwt_event_dom_client_PrivateMap_map[key];
}

function com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map[key] = value_0;
}

function com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V(){
  this.com_google_gwt_event_dom_client_PrivateMap_map = {};
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(203, 1, {}, com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1PrivateMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'PrivateMap', 203);
function com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(){
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV;
    source.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event_0);
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(162, 293, {}, com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 305);
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1CloseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CloseEvent', 162);
function com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV(){
}

function com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_ResizeEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event_0);
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(259, 293, {}, com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_ResizeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 306);
  com_google_gwt_user_client_ui_PopupPanel$1_$onResize__Lcom_google_gwt_user_client_ui_PopupPanel$1_2Lcom_google_gwt_event_logical_shared_ResizeEvent_2V();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_ResizeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1ResizeEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ResizeEvent', 259);
function com_google_gwt_event_logical_shared_ValueChangeEvent_$dispatch__Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2V(handler){
  handler.com_google_gwt_user_client_ui_PopupPanel$4_this$01.com_google_gwt_user_client_ui_PopupPanel_autoHideOnHistoryEvents && handler.com_google_gwt_user_client_ui_PopupPanel$4_this$01.hide__ZV(false);
}

function com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V(){
}

function com_google_gwt_event_logical_shared_ValueChangeEvent_fire__Lcom_google_gwt_event_logical_shared_HasValueChangeHandlers_2Ljava_lang_Object_2V(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source.com_google_gwt_user_client_History$HistoryEventSource_handlers, event_0);
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(265, 293, {}, com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_ValueChangeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_logical_shared_ValueChangeEvent_$dispatch__Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2V(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 309));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_ValueChangeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1ValueChangeEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ValueChangeEvent', 265);
function com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  return new com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, type_0, handler));
}

function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  var e, oldSource;
  !event_0.com_google_gwt_event_shared_GwtEvent_dead || event_0.revive__V();
  oldSource = event_0.com_google_web_bindery_event_shared_Event_source;
  com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(event_0, this$static.com_google_gwt_event_shared_HandlerManager_source);
  try {
    com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, event_0);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 45)) {
      e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(e.com_google_web_bindery_event_shared_UmbrellaException_causes));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
   finally {
    oldSource == null?(event_0.com_google_gwt_event_shared_GwtEvent_dead = true , event_0.com_google_web_bindery_event_shared_Event_source = null):(event_0.com_google_web_bindery_event_shared_Event_source = oldSource);
  }
}

function com_google_gwt_event_shared_HandlerManager_$isEventHandled__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Z(this$static, e){
  return com_google_web_bindery_event_shared_SimpleEventBus_$isEventHandled__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Z(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, e);
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(source){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV.call(this, source, false);
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV(source, fireInReverseOrder){
  this.com_google_gwt_event_shared_HandlerManager_eventBus = new com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(fireInReverseOrder);
  this.com_google_gwt_event_shared_HandlerManager_source = source;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(52, 1, {10:1}, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV);
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V = function com_google_gwt_event_shared_HandlerManager_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event_0){
  com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this, event_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_42, 'HandlerManager', 52);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(294, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1EventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'EventBus', 294);
function com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, command){
  !this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas && (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = new java_util_ArrayList_ArrayList__V);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas, command);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a handler with a null type'));
  }
  if (!handler) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a null handler'));
  }
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler)):(l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, null) , l.add__Ljava_lang_Object_2Z(handler));
  return new com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  l.add__Ljava_lang_Object_2Z(handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot fire null event'));
  }
  try {
    ++this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    handlers = (directHandlers = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, event_0.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(), null) , directHandlers);
    causes = null;
    it = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?handlers.listIterator__ILjava_util_ListIterator_2(handlers.size__I()):handlers.listIterator__Ljava_util_ListIterator_2();
    while (this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.hasPrevious__Z():it.hasNext__Z()) {
      handler = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.previous__Ljava_lang_Object_2():it.next__Ljava_lang_Object_2();
      try {
        event_0.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 34));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
          e = $e0;
          !causes && (causes = new java_util_HashSet_HashSet__V);
          java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(causes.java_util_HashSet_map, e, causes);
        }
         else 
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
    if (causes) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes));
    }
  }
   finally {
    --this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth == 0 && com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static);
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l, removed, com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  removed = l.remove__Ljava_lang_Object_2Z(handler);
  removed && l.isEmpty__Z() && (com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0 = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 58) , com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.java_util_AbstractHashMap_hashCodeMap, source), 27) , com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size == 0 && java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0) , undefined);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 58);
  if (!sourceMap) {
    sourceMap = new java_util_HashMap_HashMap__V;
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0, sourceMap);
  }
  handlers = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, source)), 27);
  if (!handlers) {
    handlers = new java_util_ArrayList_ArrayList__V;
    java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, source, handlers);
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 58);
  if (!sourceMap) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  handlers = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, source)), 27);
  if (!handlers) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static){
  var c, c$iterator;
  if (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas) {
    try {
      for (c$iterator = new java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas); c$iterator.java_util_ArrayList$1_i < c$iterator.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length;) {
        c = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(c$iterator), 270);
        c.execute__V();
      }
    }
     finally {
      this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = null;
    }
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$isEventHandled__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Z(this$static, eventKey){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, eventKey);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(148, 294, {});
_.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth = 0;
_.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'SimpleEventBus', 148);
function com_google_gwt_event_shared_HandlerManager$Bus_$doRemove__Lcom_google_gwt_event_shared_HandlerManager$Bus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, source, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler);
}

function com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(fireInReverseOrder){
  this.com_google_web_bindery_event_shared_SimpleEventBus_map = new java_util_HashMap_HashMap__V;
  this.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = fireInReverseOrder;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(149, 148, {}, com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$Bus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_42, 'HandlerManager/Bus', 149);
function com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(real){
  this.com_google_gwt_event_shared_LegacyHandlerWrapper_real = real;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(195, 1, {}, com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1LegacyHandlerWrapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_42, 'LegacyHandlerWrapper', 195);
function com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  var cause, cause$iterator, i;
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes), causes.isEmpty__Z()?null:com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(causes.iterator__Ljava_util_Iterator_2().next__Ljava_lang_Object_2(), 4));
  this.com_google_web_bindery_event_shared_UmbrellaException_causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator__Ljava_util_Iterator_2(); cause$iterator.hasNext__Z();) {
    cause = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(cause$iterator.next__Ljava_lang_Object_2(), 4);
    if (i++ == 0) {
      continue;
    }
    java_lang_Throwable_$addSuppressed__Ljava_lang_Throwable_2Ljava_lang_Throwable_2V(this, cause);
  }
}

function com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes){
  var b, count, first, t, t$iterator;
  count = causes.size__I();
  if (count == 0) {
    return null;
  }
  b = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator__Ljava_util_Iterator_2(); t$iterator.hasNext__Z();) {
    t = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(t$iterator.next__Ljava_lang_Object_2(), 4);
    first?(first = false):(b.java_lang_AbstractStringBuilder_string += '; ' , b);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(b, t.getMessage__Ljava_lang_String_2());
  }
  return b.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(45, 15, $intern_45, com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, $intern_46, 45);
function com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(93, 45, $intern_45, com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_42, $intern_46, 93);
function com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static){
  var xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  xhr.abort();
}

function com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  var response, xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  response = new com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  org_fusesource_restygwt_client_AbstractRequestCallback_$onResponseReceived__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(callback, response);
}

function com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this$static){
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static);
  org_fusesource_restygwt_client_AbstractRequestCallback_$onError__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Ljava_lang_Throwable_2V(this$static.com_google_gwt_http_client_Request_callback, new com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(this$static.com_google_gwt_http_client_Request_timeoutMillis));
}

function com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, timeoutMillis, callback){
  this.com_google_gwt_http_client_Request_timer = new com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this);
  if (!xmlHttpRequest) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (!callback) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (timeoutMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__V);
  }
  this.com_google_gwt_http_client_Request_callback = callback;
  this.com_google_gwt_http_client_Request_timeoutMillis = timeoutMillis;
  this.com_google_gwt_http_client_Request_xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_http_client_Request_timer, timeoutMillis);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(213, 1, {}, com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V);
_.com_google_gwt_http_client_Request_timeoutMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'Request', 213);
function com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this$0){
  this.com_google_gwt_http_client_Request$1_this$01 = this$0;
  com_google_gwt_user_client_Timer_Timer__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(216, 106, {}, com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V);
_.run__V = function com_google_gwt_http_client_Request$1_run__V(){
  com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this.com_google_gwt_http_client_Request$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'Request/1', 216);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(303, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Response_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'Response', 303);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(214, 303, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1ResponseImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'ResponseImpl', 214);
function com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V($anonymous0){
  this.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest = $anonymous0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(215, 214, {}, com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$RequestImplIE8And9$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'Request/RequestImplIE8And9/1', 215);
function com_google_gwt_http_client_RequestBuilder_$clinit__V(){
  com_google_gwt_http_client_RequestBuilder_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('DELETE');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('GET');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('HEAD');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('POST');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('PUT');
}

function com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_httpMethod, this$static.com_google_gwt_http_client_RequestBuilder_url);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 33)) {
      e = $e0;
      requestPermissionException = new com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(this$static.com_google_gwt_http_client_RequestBuilder_url);
      java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(requestPermissionException, new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(requestPermissionException);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
  com_google_gwt_http_client_RequestBuilder_$setHeaders__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static, xmlHttpRequest);
  this$static.com_google_gwt_http_client_RequestBuilder_includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_timeoutMillis, callback);
  com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(xmlHttpRequest, new com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e1, 33)) {
      e = $e1;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
  }
  return request;
}

function com_google_gwt_http_client_RequestBuilder_$getHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (!this$static.com_google_gwt_http_client_RequestBuilder_headers) {
    return null;
  }
  return com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.com_google_gwt_http_client_RequestBuilder_headers, $intern_48));
}

function com_google_gwt_http_client_RequestBuilder_$setCallback__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', callback);
  this$static.com_google_gwt_http_client_RequestBuilder_callback = callback;
}

function com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, header, value_0){
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('header', header);
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('value', value_0);
  !this$static.com_google_gwt_http_client_RequestBuilder_headers && (this$static.com_google_gwt_http_client_RequestBuilder_headers = new java_util_HashMap_HashMap__V);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_http_client_RequestBuilder_headers, header, value_0);
}

function com_google_gwt_http_client_RequestBuilder_$setHeaders__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.com_google_gwt_http_client_RequestBuilder_headers && java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this$static.com_google_gwt_http_client_RequestBuilder_headers) > 0) {
    for (header$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static.com_google_gwt_http_client_RequestBuilder_headers)).java_util_AbstractHashMap$EntrySet_this$01); header$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
      header = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(header$iterator);
      try {
        com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(header.getKey__Ljava_lang_Object_2()), com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(header.getValue__Ljava_lang_Object_2()));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 33)) {
          e = $e0;
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
        }
         else 
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader($intern_48, 'text/plain; charset=utf-8');
  }
}

function com_google_gwt_http_client_RequestBuilder_$setRequestData__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2V(this$static, requestData){
  this$static.com_google_gwt_http_client_RequestBuilder_requestData = requestData;
}

function com_google_gwt_http_client_RequestBuilder_$setTimeoutMillis__Lcom_google_gwt_http_client_RequestBuilder_2IV(this$static, timeoutMillis){
  if (timeoutMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Timeouts cannot be negative'));
  }
  this$static.com_google_gwt_http_client_RequestBuilder_timeoutMillis = timeoutMillis;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(207, 1, {});
_.com_google_gwt_http_client_RequestBuilder_includeCredentials = false;
_.com_google_gwt_http_client_RequestBuilder_timeoutMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'RequestBuilder', 207);
function com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(val$request, val$callback){
  this.com_google_gwt_http_client_RequestBuilder$1_val$request2 = val$request;
  this.com_google_gwt_http_client_RequestBuilder$1_val$callback3 = val$callback;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(209, 1, {}, com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V);
_.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V = function com_google_gwt_http_client_RequestBuilder$1_onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr){
  if (xhr.readyState == 4) {
    com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
    com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this.com_google_gwt_http_client_RequestBuilder$1_val$request2, this.com_google_gwt_http_client_RequestBuilder$1_val$callback3);
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'RequestBuilder/1', 209);
function com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V(name_0){
  this.com_google_gwt_http_client_RequestBuilder$Method_name = name_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(54, 1, {}, com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V);
_.toString__Ljava_lang_String_2 = function com_google_gwt_http_client_RequestBuilder$Method_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_http_client_RequestBuilder$Method_name;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$Method_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'RequestBuilder/Method', 54);
function com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(24, 44, $intern_49, com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'RequestException', 24);
function com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(url_0){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(217, 24, $intern_49, com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestPermissionException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'RequestPermissionException', 217);
function com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(timeoutMillis){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(220, 24, $intern_49, com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestTimeoutException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'RequestTimeoutException', 220);
function com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V(name_0, value_0){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0);
  if (0 == java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(value_0).length) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(name_0 + ' cannot be empty'));
  }
}

function com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0){
  if (null == value_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(name_0 + ' cannot be null'));
  }
}

function com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem){
  var dirPropertyValue;
  dirPropertyValue = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'dir');
  if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('rtl', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_RTL;
  }
   else if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('ltr', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR;
  }
  return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT;
}

function com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(elem, direction){
  switch (direction.java_lang_Enum_ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem) != (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_i18n_client_HasDirection$Direction_RTL = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('RTL', 0);
  com_google_gwt_i18n_client_HasDirection$Direction_LTR = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('LTR', 1);
  com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('DEFAULT', 2);
}

function com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit, 1), $intern_17, 51, 0, [com_google_gwt_i18n_client_HasDirection$Direction_RTL, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(51, 5, {51:1, 3:1, 6:1, 5:1}, com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV);
var com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_RTL;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('com.google.gwt.i18n.client', 'HasDirection/Direction', 51, com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(302, 1, {});
_.isArray__Lcom_google_gwt_json_client_JSONArray_2 = function com_google_gwt_json_client_JSONValue_isArray__Lcom_google_gwt_json_client_JSONArray_2(){
  return null;
}
;
_.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2 = function com_google_gwt_json_client_JSONValue_isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2(){
  return null;
}
;
_.isNull__Lcom_google_gwt_json_client_JSONNull_2 = function com_google_gwt_json_client_JSONValue_isNull__Lcom_google_gwt_json_client_JSONNull_2(){
  return null;
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONValue_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return null;
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONValue_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return null;
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONValue_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONValue_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_50, 'JSONValue', 302);
function com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index_0){
  var v = this$static.com_google_gwt_json_client_JSONArray_jsArray[index_0];
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(this$static, index_0, value_0){
  var previous;
  previous = com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index_0);
  com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(this$static, index_0, value_0);
  return previous;
}

function com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.com_google_gwt_json_client_JSONArray_jsArray[index_0] = value_0;
}

function com_google_gwt_json_client_JSONArray_JSONArray__V(){
  this.com_google_gwt_json_client_JSONArray_jsArray = [];
}

function com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(arr){
  this.com_google_gwt_json_client_JSONArray_jsArray = arr;
}

function com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2(value_0){
  return value_0.com_google_gwt_json_client_JSONArray_jsArray;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(55, 302, {55:1}, com_google_gwt_json_client_JSONArray_JSONArray__V, com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONArray_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 55)) {
    return false;
  }
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONArray_jsArray, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 55).com_google_gwt_json_client_JSONArray_jsArray);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONArray_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONArray_hashCode__I(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this.com_google_gwt_json_client_JSONArray_jsArray);
}
;
_.isArray__Lcom_google_gwt_json_client_JSONArray_2 = function com_google_gwt_json_client_JSONArray_isArray__Lcom_google_gwt_json_client_JSONArray_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONArray_toString__Ljava_lang_String_2(){
  var c, i, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  for (i = 0 , c = this.com_google_gwt_json_client_JSONArray_jsArray.length; i < c; i++) {
    i > 0 && (sb.java_lang_AbstractStringBuilder_string += ',' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this, i));
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONArray_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_50, 'JSONArray', 55);
function com_google_gwt_json_client_JSONBoolean_$clinit__V(){
  com_google_gwt_json_client_JSONBoolean_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONBoolean_FALSE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(false);
  com_google_gwt_json_client_JSONBoolean_TRUE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(true);
}

function com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(value_0){
  this.com_google_gwt_json_client_JSONBoolean_value = value_0;
}

function com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2Z(value_0){
  return value_0.com_google_gwt_json_client_JSONBoolean_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(107, 302, {}, com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV);
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONBoolean_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2Z;
}
;
_.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2 = function com_google_gwt_json_client_JSONBoolean_isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONBoolean_toString__Ljava_lang_String_2(){
  return java_lang_Boolean_$clinit__V() , '' + this.com_google_gwt_json_client_JSONBoolean_value;
}
;
_.com_google_gwt_json_client_JSONBoolean_value = false;
var com_google_gwt_json_client_JSONBoolean_FALSE, com_google_gwt_json_client_JSONBoolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONBoolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_50, 'JSONBoolean', 107);
function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(cause){
  this.java_lang_Throwable_detailMessage = !cause?null:java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(cause, cause.getMessage__Ljava_lang_String_2());
  this.java_lang_Throwable_cause = cause;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(83, 15, $intern_33, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_50, 'JSONException', 83);
function com_google_gwt_json_client_JSONNull_$clinit__V(){
  com_google_gwt_json_client_JSONNull_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONNull_instance = new com_google_gwt_json_client_JSONNull_JSONNull__V;
}

function com_google_gwt_json_client_JSONNull_JSONNull__V(){
}

function com_google_gwt_json_client_JSONNull_unwrap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(82, 302, {82:1}, com_google_gwt_json_client_JSONNull_JSONNull__V);
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONNull_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONNull_unwrap__Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.isNull__Lcom_google_gwt_json_client_JSONNull_2 = function com_google_gwt_json_client_JSONNull_isNull__Lcom_google_gwt_json_client_JSONNull_2(){
  if (this != com_google_gwt_json_client_JSONNull_instance) {
    return null;
  }
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONNull_toString__Ljava_lang_String_2(){
  return $intern_35;
}
;
var com_google_gwt_json_client_JSONNull_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_50, 'JSONNull', 82);
function com_google_gwt_json_client_JSONNumber_JSONNumber__DV(value_0){
  this.com_google_gwt_json_client_JSONNumber_value = value_0;
}

function com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2D(value_0){
  return value_0.com_google_gwt_json_client_JSONNumber_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(47, 302, {47:1}, com_google_gwt_json_client_JSONNumber_JSONNumber__DV);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONNumber_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 47)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONNumber_value == com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 47).com_google_gwt_json_client_JSONNumber_value;
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONNumber_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2D;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONNumber_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI(javaemul_internal_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_json_client_JSONNumber_value));
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONNumber_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONNumber_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_json_client_JSONNumber_value + '';
}
;
_.com_google_gwt_json_client_JSONNumber_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNumber_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_50, 'JSONNumber', 47);
function com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this$static, result){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  if (key == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  return com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key);
}

function com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  var ret = func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  return ret;
}

function com_google_gwt_json_client_JSONObject_$put0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2V(this$static, key, value_0){
  if (value_0) {
    var func = value_0.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2();
    this$static.com_google_gwt_json_client_JSONObject_jsObject[key] = func(value_0);
  }
   else {
    delete this$static.com_google_gwt_json_client_JSONObject_jsObject[key];
  }
}

function com_google_gwt_json_client_JSONObject_JSONObject__V(){
  com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V.call(this, {});
}

function com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(jsValue){
  this.com_google_gwt_json_client_JSONObject_jsObject = jsValue;
}

function com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(value_0){
  return value_0.com_google_gwt_json_client_JSONObject_jsObject;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(43, 302, {43:1}, com_google_gwt_json_client_JSONObject_JSONObject__V, com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONObject_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 43)) {
    return false;
  }
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONObject_jsObject, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 43).com_google_gwt_json_client_JSONObject_jsObject);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONObject_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONObject_hashCode__I(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this.com_google_gwt_json_client_JSONObject_jsObject);
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONObject_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONObject_toString__Ljava_lang_String_2(){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  first = true;
  keys_0 = com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this, com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_17, 2, 0, 6, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.java_lang_AbstractStringBuilder_string += ', ' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(key));
    sb.java_lang_AbstractStringBuilder_string += ':';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this, key));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_50, 'JSONObject', 43);
function com_google_gwt_json_client_JSONParser_$clinit__V(){
  com_google_gwt_json_client_JSONParser_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONParser_typeMap = {'boolean':com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2, 'number':com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2, 'string':com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2, 'object':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, 'function':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, 'undefined':com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2};
}

function com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2(v){
  return com_google_gwt_json_client_JSONBoolean_$clinit__V() , v?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE;
}

function com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(v);
}

function com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(o){
  if (!o) {
    return com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
    return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
   else {
    return new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
}

function com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(v);
}

function com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2(){
  return null;
}

function com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_51 + e);
    }
  }
   else {
    json = com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_51 + e);
    }
  }
  var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  var ex;
  if (jsonString == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (jsonString.length == 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('empty argument'));
  }
  try {
    return com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString, false);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 33)) {
      ex = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(ex));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V(message){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message));
}

function com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team"));
}

var com_google_gwt_json_client_JSONParser_typeMap;
function com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(value_0){
  if (value_0 == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  this.com_google_gwt_json_client_JSONString_value = value_0;
}

function com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2(value_0){
  return value_0.com_google_gwt_json_client_JSONString_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(56, 302, {56:1}, com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONString_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 56)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONString_value, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 56).com_google_gwt_json_client_JSONString_value);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONString_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONString_hashCode__I(){
  return javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_json_client_JSONString_value);
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONString_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONString_toString__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(this.com_google_gwt_json_client_JSONString_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_50, 'JSONString', 56);
function com_google_gwt_lang_Array_canSet__Ljava_lang_Object_2Ljava_lang_Object_2Z(array, value_0){
  var elementTypeCategory;
  switch (com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(array)) {
    case 6:
      return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(value_0);
    case 7:
      return com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(value_0);
    case 8:
      return com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === $intern_1;
    case 12:
      return value_0 != null && (typeof value_0 === $intern_0 || typeof value_0 == $intern_1);
    case 0:
      return com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, array.__elementTypeId$);
    case 2:
      return com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(value_0) && !(value_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V);
    case 1:
      return com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(value_0) && !(value_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V) || com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions){
  return java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions);
}

function com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0);
  elementTypeCategory != 10 && com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(src_0){
  return Array.isArray(src_0) && src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V;
}

function com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index_0, value_0){
  javaemul_internal_InternalPreconditions_checkCriticalArrayType__ZV(value_0 == null || com_google_gwt_lang_Array_canSet__Ljava_lang_Object_2Ljava_lang_Object_2Z(array, value_0));
  return array[index_0] = value_0;
}

function com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.java_lang_Object__1_1_1clazz = arrayClass;
  array.java_lang_Object_castableTypeMap = castableTypeMap;
  array.java_lang_Object_typeMarker = com_google_gwt_lang_Runtime_typeMarkerFn__V;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var javaException;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 4)) {
    return e;
  }
  javaException = e && e[$intern_32];
  if (!javaException) {
    javaException = new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
    com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(javaException);
  }
  return javaException;
}

function com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(t){
  return t.java_lang_Throwable_backingJsObject;
}

function com_google_gwt_lang_com_100046exampleproject_100046gwt_100046init_100046Init_1_1EntryMethodHolder_init__V(){
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  com_google_gwt_logging_client_LogConfiguration_$clinit__V();
  org_fusesource_restygwt_client_Defaults_setServiceRoot__Ljava_lang_String_2V(com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2() + 'backend');
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()), new com_exampleproject_gwt_startpoint_client_views_LoginView_LoginView__V);
}

function com_google_gwt_logging_client_LogConfiguration_$clinit__V(){
  com_google_gwt_logging_client_LogConfiguration_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_logging_client_LogConfiguration_impl = new com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V;
}

function com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z(){
  com_google_gwt_logging_client_LogConfiguration_$clinit__V();
  if (!com_google_gwt_logging_client_LogConfiguration_impl) {
    return true;
  }
  return false;
}

var com_google_gwt_logging_client_LogConfiguration_impl;
function com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(117, 1, {}, com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration$LogConfigurationImplNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplNull', 117);
function com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V(uri_0){
  if (uri_0 == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('uri is null'));
  }
  this.com_google_gwt_safehtml_shared_SafeUriString_uri = uri_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(70, 1, {308:1, 70:1}, com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_safehtml_shared_SafeUriString_equals__Ljava_lang_Object_2Z(obj){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 70)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_safehtml_shared_SafeUriString_uri, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 308), 70).com_google_gwt_safehtml_shared_SafeUriString_uri);
}
;
_.hashCode__I = function com_google_gwt_safehtml_shared_SafeUriString_hashCode__I(){
  return javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_safehtml_shared_SafeUriString_uri);
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_safehtml_shared_SafeUriString_toString__Ljava_lang_String_2(){
  return 'safe: "' + this.com_google_gwt_safehtml_shared_SafeUriString_uri + '"';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1safehtml_1shared_1SafeUriString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.safehtml.shared', 'SafeUriString', 70);
function com_google_gwt_safehtml_shared_UriUtils_$clinit__V(){
  com_google_gwt_safehtml_shared_UriUtils_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(297, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1AbstractRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.text.shared', 'AbstractRenderer', 297);
function com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(205, 1, {}, com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V);
var com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughParser_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_52, 'PassthroughParser', 205);
function com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(204, 297, {}, com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V);
var com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_52, 'PassthroughRenderer', 204);
function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(evt.type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_isPotential__Lcom_google_gwt_core_client_JavaScriptObject_2Z(o){
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt){
  var ret;
  ret = com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2Z(com_google_gwt_user_client_Event_handlers, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    evt.returnValue = false;
  }
  return ret;
}

function com_google_gwt_user_client_DOM_releaseCapture__Lcom_google_gwt_dom_client_Element_2V(elem){
  !!com_google_gwt_user_client_DOM_sCaptureElem && elem == com_google_gwt_user_client_DOM_sCaptureElem && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  elem.releaseCapture();
}

function com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_DOM_sCaptureElem = elem;
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  elem.setCapture();
}

function com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplTrident_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits);
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem;
function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_17, 2, 6, [$intern_36]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_36, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_user_client_Event_$getTypeInt__Lcom_google_gwt_user_client_Event_2I(this$static){
  return com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(this$static.type);
}

function com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  !com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && (com_google_gwt_user_client_Event$NativePreviewEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
  if (!com_google_gwt_user_client_Event_handlers) {
    com_google_gwt_user_client_Event_handlers = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV(null, true);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton = new com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V;
  }
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_user_client_Event_handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE, handler);
}

function com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(typeName){
  return com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(typeName);
}

function com_google_gwt_user_client_Event_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplTrident_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits);
}

var com_google_gwt_user_client_Event_handlers;
function com_google_gwt_user_client_Event$NativePreviewEvent_$dispatch__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_user_client_Event$NativePreviewHandler_2V(this$static, handler){
  com_google_gwt_user_client_ui_PopupPanel_$previewNativeEvent__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(handler.com_google_gwt_user_client_ui_PopupPanel$3_this$01, this$static);
  com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = false;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this$static){
  this$static.com_google_gwt_event_shared_GwtEvent_dead = false;
  this$static.com_google_web_bindery_event_shared_Event_source = null;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = true;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = null;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_$setNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V(){
}

function com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2Z(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && !!handlers && com_google_gwt_event_shared_HandlerManager_$isEventHandled__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Z(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE)) {
    lastIsCanceled = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled;
    lastIsConsumed = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed;
    lastIsFirstHandler = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler;
    lastNativeEvent = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
    com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    com_google_gwt_user_client_Event$NativePreviewEvent_$setNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(com_google_gwt_user_client_Event$NativePreviewEvent_singleton, nativeEvent);
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    ret = !(com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled && !com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = lastIsCanceled;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = lastIsConsumed;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = lastIsFirstHandler;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(153, 293, {}, com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Event$NativePreviewEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_user_client_Event$NativePreviewEvent_$dispatch__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_user_client_Event$NativePreviewHandler_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 307));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Event$NativePreviewEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Event$NativePreviewEvent_TYPE;
}
;
_.revive__V = function com_google_gwt_user_client_Event$NativePreviewEvent_revive__V(){
  com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this);
}
;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = false;
var com_google_gwt_user_client_Event$NativePreviewEvent_TYPE, com_google_gwt_user_client_Event$NativePreviewEvent_singleton;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Event$NativePreviewEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'Event/NativePreviewEvent', 153);
function com_google_gwt_user_client_History_$clinit__V(){
  com_google_gwt_user_client_History_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_user_client_History$HistoryImplIE8_History$HistoryImplIE8__V;
  com_google_gwt_user_client_History_historyEventSource = new com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V;
  com_google_gwt_user_client_History_token = com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2();
}

function com_google_gwt_user_client_History_addValueChangeHandler__Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_History_$clinit__V();
  return com_google_gwt_user_client_History$HistoryEventSource_$addValueChangeHandler__Lcom_google_gwt_user_client_History$HistoryEventSource_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_user_client_History_historyEventSource, handler);
}

function com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2(){
  var hashToken, com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0, com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0;
  hashToken = (com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0 = $wnd.location.href , com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0 = com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0.indexOf('#') , com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0 > 0?com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0.substring(com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0):'');
  if (hashToken == null || hashToken.length == 0) {
    return '';
  }
  return com_google_gwt_user_client_History$HistoryTokenEncoder_$decode__Lcom_google_gwt_user_client_History$HistoryTokenEncoder_2Ljava_lang_String_2Ljava_lang_String_2(hashToken.substr(1));
}

function com_google_gwt_user_client_History_onHashChanged__V(){
  com_google_gwt_user_client_History_$clinit__V();
  var hashToken;
  hashToken = com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(hashToken, com_google_gwt_user_client_History_token)) {
    com_google_gwt_user_client_History_token = hashToken;
    com_google_gwt_event_logical_shared_ValueChangeEvent_fire__Lcom_google_gwt_event_logical_shared_HasValueChangeHandlers_2Ljava_lang_Object_2V(com_google_gwt_user_client_History_historyEventSource);
  }
}

var com_google_gwt_user_client_History_historyEventSource, com_google_gwt_user_client_History_token;
function com_google_gwt_user_client_History$HistoryEventSource_$addValueChangeHandler__Lcom_google_gwt_user_client_History$HistoryEventSource_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.com_google_gwt_user_client_History$HistoryEventSource_handlers, (!com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE && (com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE), handler);
}

function com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V(){
  this.com_google_gwt_user_client_History$HistoryEventSource_handlers = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(256, 1, {10:1}, com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V);
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V = function com_google_gwt_user_client_History$HistoryEventSource_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event_0){
  com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this.com_google_gwt_user_client_History$HistoryEventSource_handlers, event_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1History$HistoryEventSource_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'History/HistoryEventSource', 256);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(257, 1, {});
_.attachListener__V = function com_google_gwt_user_client_History$HistoryImpl_attachListener__V(){
  var handler = $entry(com_google_gwt_user_client_History_onHashChanged__V);
  $wnd.addEventListener('hashchange', handler, false);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1History$HistoryImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'History/HistoryImpl', 257);
function com_google_gwt_user_client_History$HistoryImplIE8_History$HistoryImplIE8__V(){
  this.attachListener__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(258, 257, {}, com_google_gwt_user_client_History$HistoryImplIE8_History$HistoryImplIE8__V);
_.attachListener__V = function com_google_gwt_user_client_History$HistoryImplIE8_attachListener__V(){
  var handler = $entry(com_google_gwt_user_client_History_onHashChanged__V);
  var oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = function(){
    var ex;
    try {
      handler();
    }
     catch (e) {
      ex = e;
    }
    if (oldHandler != null) {
      try {
        oldHandler();
      }
       catch (e) {
        ex = ex || e;
      }
    }
    if (ex != null) {
      throw ex;
    }
  }
  ;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1History$HistoryImplIE8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'History/HistoryImplIE8', 258);
function com_google_gwt_user_client_History$HistoryTokenEncoder_$decode__Lcom_google_gwt_user_client_History$HistoryTokenEncoder_2Ljava_lang_String_2Ljava_lang_String_2(toDecode){
  return $wnd.decodeURI(toDecode.replace('%23', '#'));
}

function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type_0, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), type_0, handler);
}

function com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_event_logical_shared_ResizeEvent_TYPE && (com_google_gwt_event_logical_shared_ResizeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_ResizeEvent_TYPE), handler);
}

function com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(msg){
  $wnd.alert(msg);
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V(){
  if (!com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
    com_google_gwt_user_client_Window_resizeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosed__V(){
  com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event_0;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event_0 = new com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V;
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event_0);
    return null;
  }
  return null;
}

function com_google_gwt_user_client_Window_onResize__V(){
  var height, width_0;
  if (com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    width_0 = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
    height = com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
    if (com_google_gwt_user_client_Window_lastResizeWidth != width_0 || com_google_gwt_user_client_Window_lastResizeHeight != height) {
      com_google_gwt_user_client_Window_lastResizeWidth = width_0;
      com_google_gwt_user_client_Window_lastResizeHeight = height;
      com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
    }
  }
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers, com_google_gwt_user_client_Window_lastResizeHeight = 0, com_google_gwt_user_client_Window_lastResizeWidth = 0, com_google_gwt_user_client_Window_resizeHandlersInitialized = false;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(146, 293, {}, com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(handler == null);
  null.$_nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}
;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$ClosingEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'Window/ClosingEvent', 146);
function com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V(){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V.call(this, null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(78, 52, {10:1}, com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$WindowHandlers_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'Window/WindowHandlers', 78);
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case $intern_53:
      return $intern_54;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case $intern_12:
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplTrident_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplTrident_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem){
  var maybeListener = elem.__listener;
  return !com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(maybeListener) && com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(maybeListener, 12)?maybeListener:null;
}

function com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener){
  elem.__listener = listener;
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplTrident_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplTrident_2V(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z($wnd.event);
  }
  );
  var dispatchEvent = $entry(function(){
    var oldEventTarget = com_google_gwt_dom_client_DOMImplTrident_currentEventTarget;
    com_google_gwt_dom_client_DOMImplTrident_currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!com_google_gwt_user_client_impl_DOMImplTrident_previewEventImpl__Z()) {
        com_google_gwt_dom_client_DOMImplTrident_currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V($wnd.event, curElem, listener);
    com_google_gwt_dom_client_DOMImplTrident_currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      com_google_gwt_user_client_impl_DOMImplTrident_previewEventImpl__Z();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent.call(this);
  }
  );
  var moduleName = (com_google_gwt_core_client_impl_Impl_$clinit__V() , $moduleName).replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent;
  com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  com_google_gwt_user_client_impl_DOMImplTrident_callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + $intern_55))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  com_google_gwt_user_client_impl_DOMImplTrident_callDispatchUnhandledEvent = (new Function('w', $intern_56 + moduleName + $intern_55))($wnd);
  com_google_gwt_user_client_impl_DOMImplTrident_callDispatchOnLoadEvent = (new Function('w', $intern_56 + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function com_google_gwt_user_client_impl_DOMImplTrident_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(parent_0, child, index_0){
  index_0 >= parent_0.children.length?parent_0.appendChild(child):parent_0.insertBefore(child, parent_0.children[index_0]);
}

function com_google_gwt_user_client_impl_DOMImplTrident_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & $intern_54 && (elem.nodeName == 'IFRAME'?bits & $intern_54?elem.attachEvent('onload', com_google_gwt_user_client_impl_DOMImplTrident_callDispatchOnLoadEvent):elem.detachEvent('onload', com_google_gwt_user_client_impl_DOMImplTrident_callDispatchOnLoadEvent):(elem.onload = bits & $intern_54?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchUnhandledEvent:null));
  chMask & 65536 && (elem.onerror = bits & 65536?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent:null);
}

function com_google_gwt_user_client_impl_DOMImplTrident_previewEventImpl__Z(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var com_google_gwt_user_client_impl_DOMImplTrident_callDispatchDblClickEvent, com_google_gwt_user_client_impl_DOMImplTrident_callDispatchEvent, com_google_gwt_user_client_impl_DOMImplTrident_callDispatchOnLoadEvent, com_google_gwt_user_client_impl_DOMImplTrident_callDispatchUnhandledEvent;
function com_google_gwt_user_client_impl_ElementMapperImpl_$get__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static, elem){
  var index_0;
  index_0 = com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_dom_client_Element_2I(elem);
  if (index_0 < 0) {
    return null;
  }
  return com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index_0), 9);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$put__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_ui_UIObject_2V(this$static, uiObject){
  var index_0;
  if (!this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList) {
    index_0 = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList.java_util_ArrayList_array.length;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, uiObject);
  }
   else {
    index_0 = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index;
    java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index_0, uiObject);
    this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next;
  }
  uiObject.com_google_gwt_user_client_ui_UIObject_element[$intern_57] = index_0;
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$removeByElement__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  var index_0;
  index_0 = com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_dom_client_Element_2I(elem);
  elem[$intern_57] = null;
  java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index_0, null);
  this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = new com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V(index_0, this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V(){
  this.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList = new java_util_ArrayList_ArrayList__V;
}

function com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_dom_client_Element_2I(elem){
  var index_0 = elem[$intern_57];
  return index_0 == null?-1:index_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(233, 1, {}, com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V);
_.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1ElementMapperImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_58, 'ElementMapperImpl', 233);
function com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V(index_0, next){
  this.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index = index_0;
  this.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next = next;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(234, 1, {}, com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V);
_.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1ElementMapperImpl$FreeNode_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_58, 'ElementMapperImpl/FreeNode', 234);
function com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(initFunc, cmd){
  var scriptElem;
  scriptElem = com_google_gwt_dom_client_DOMImpl_$createScriptElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2($doc, initFunc);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, scriptElem);
  cmd.execute__V();
  com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, scriptElem);
}

function com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(160, 1, {}, com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
_.execute__V = function com_google_gwt_user_client_impl_WindowImplIE$1_execute__V(){
  $wnd.__gwt_initWindowCloseHandler($entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2), $entry(com_google_gwt_user_client_Window_onClosed__V));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1WindowImplIE$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_58, 'WindowImplIE/1', 160);
function com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(161, 1, {}, com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
_.execute__V = function com_google_gwt_user_client_impl_WindowImplIE$2_execute__V(){
  $wnd.__gwt_initWindowResizeHandler($entry(com_google_gwt_user_client_Window_onResize__V));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1WindowImplIE$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_58, 'WindowImplIE/2', 161);
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(container, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = w.com_google_gwt_user_client_ui_UIObject_element;
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem), elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V(){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(76, 285, $intern_14);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ComplexPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'ComplexPanel', 76);
function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V(w.com_google_gwt_user_client_ui_UIObject_element);
  return removed;
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(123, 76, $intern_14);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AbsolutePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'AbsolutePanel', 123);
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V;
}

function com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(causes){
  com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), 7);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        !caught && (caught = new java_util_HashSet_HashSet__V);
        java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(caught.java_util_HashSet_map, e, caught);
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  if (caught) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(caught));
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(124, 93, $intern_45, com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V);
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'AttachDetachException', 124);
function com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(125, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onAttach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'AttachDetachException/1', 125);
function com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(126, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onDetach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'AttachDetachException/2', 126);
function com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, elem);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(81, 7, $intern_13);
_.getTabIndex__I = function com_google_gwt_user_client_ui_FocusWidget_getTabIndex__I(){
  return this.com_google_gwt_user_client_ui_UIObject_element.tabIndex;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_FocusWidget_onAttach__V(){
  var tabIndex;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
  tabIndex = this.getTabIndex__I();
  -1 == tabIndex && this.setTabIndex__IV(0);
}
;
_.setTabIndex__IV = function com_google_gwt_user_client_ui_FocusWidget_setTabIndex__IV(index_0){
  com_google_gwt_dom_client_Element_$setTabIndex__Lcom_google_gwt_dom_client_Element_2IV(this.com_google_gwt_user_client_ui_UIObject_element, index_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusWidget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'FocusWidget', 81);
function com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(103, 81, $intern_13);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ButtonBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'ButtonBase', 103);
function com_google_gwt_user_client_ui_Button_Button__V(){
  com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.createElement("<BUTTON type='button'><\/BUTTON>"));
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-Button';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(37, 103, $intern_13, com_google_gwt_user_client_ui_Button_Button__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Button_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Button', 37);
function com_google_gwt_user_client_ui_CellPanel_$getWidgetTd__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2(this$static, w){
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return null;
  }
  return com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(this$static, w, align_0){
  var td;
  td = com_google_gwt_user_client_ui_CellPanel_$getWidgetTd__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2(this$static, w);
  !!td && (td['align'] = align_0.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString , undefined);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  td.style['verticalAlign'] = align_0.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString;
}

function com_google_gwt_user_client_ui_CellPanel_CellPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  this.com_google_gwt_user_client_ui_CellPanel_table = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'table');
  this.com_google_gwt_user_client_ui_CellPanel_body = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_table, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_CellPanel_body));
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, this.com_google_gwt_user_client_ui_CellPanel_table);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(102, 76, $intern_14);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CellPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'CellPanel', 102);
function com_google_gwt_user_client_ui_CheckBox_$setValue__Lcom_google_gwt_user_client_ui_CheckBox_2Ljava_lang_Boolean_2ZV(this$static, value_0){
  var oldValue;
  value_0 == null && (value_0 = (java_lang_Boolean_$clinit__V() , java_lang_Boolean_FALSE));
  oldValue = this$static.com_google_gwt_user_client_ui_Widget_attached?(java_lang_Boolean_$clinit__V() , this$static.com_google_gwt_user_client_ui_CheckBox_inputElem.checked?true:false):(java_lang_Boolean_$clinit__V() , this$static.com_google_gwt_user_client_ui_CheckBox_inputElem.defaultChecked?true:false);
  com_google_gwt_dom_client_InputElement_$setChecked__Lcom_google_gwt_dom_client_InputElement_2ZV(this$static.com_google_gwt_user_client_ui_CheckBox_inputElem, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) , value_0));
  com_google_gwt_dom_client_InputElement_$setDefaultChecked__Lcom_google_gwt_dom_client_InputElement_2ZV(this$static.com_google_gwt_user_client_ui_CheckBox_inputElem, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) , value_0));
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
  if (value_0 == oldValue) {
    return;
  }
}

function com_google_gwt_user_client_ui_CheckBox_CheckBox__V(){
  var com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0;
  com_google_gwt_user_client_ui_CheckBox_CheckBox__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0 = $doc.createElement('INPUT') , com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0.type = 'checkbox' , com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0.value = 'on' , com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0));
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-CheckBox';
}

function com_google_gwt_user_client_ui_CheckBox_CheckBox__Lcom_google_gwt_dom_client_Element_2V(elem){
  var uid;
  com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V.call(this, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'span'));
  this.com_google_gwt_user_client_ui_CheckBox_inputElem = elem;
  this.com_google_gwt_user_client_ui_CheckBox_labelElem = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'label');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_UIObject_element, this.com_google_gwt_user_client_ui_CheckBox_inputElem);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_UIObject_element, this.com_google_gwt_user_client_ui_CheckBox_labelElem);
  uid = com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2($doc);
  this.com_google_gwt_user_client_ui_CheckBox_inputElem['id'] = uid;
  com_google_gwt_dom_client_LabelElement_$setHtmlFor__Lcom_google_gwt_dom_client_LabelElement_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_CheckBox_labelElem, uid);
  this.com_google_gwt_user_client_ui_CheckBox_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_CheckBox_labelElem);
  !!this.com_google_gwt_user_client_ui_CheckBox_inputElem && (this.com_google_gwt_user_client_ui_CheckBox_inputElem.tabIndex = 0 , undefined);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(113, 103, $intern_13, com_google_gwt_user_client_ui_CheckBox_CheckBox__V);
_.getTabIndex__I = function com_google_gwt_user_client_ui_CheckBox_getTabIndex__I(){
  return this.com_google_gwt_user_client_ui_CheckBox_inputElem.tabIndex;
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_CheckBox_onLoad__V(){
  this.com_google_gwt_user_client_ui_CheckBox_inputElem.__listener = this;
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_CheckBox_onUnload__V(){
  this.com_google_gwt_user_client_ui_CheckBox_inputElem.__listener = null;
  com_google_gwt_user_client_ui_CheckBox_$setValue__Lcom_google_gwt_user_client_ui_CheckBox_2Ljava_lang_Boolean_2ZV(this, this.com_google_gwt_user_client_ui_Widget_attached?(java_lang_Boolean_$clinit__V() , this.com_google_gwt_user_client_ui_CheckBox_inputElem.checked?true:false):(java_lang_Boolean_$clinit__V() , this.com_google_gwt_user_client_ui_CheckBox_inputElem.defaultChecked?true:false));
}
;
_.setTabIndex__IV = function com_google_gwt_user_client_ui_CheckBox_setTabIndex__IV(index_0){
  !!this.com_google_gwt_user_client_ui_CheckBox_inputElem && com_google_gwt_dom_client_Element_$setTabIndex__Lcom_google_gwt_dom_client_Element_2IV(this.com_google_gwt_user_client_ui_CheckBox_inputElem, index_0);
}
;
_.sinkEvents__IV = function com_google_gwt_user_client_ui_CheckBox_sinkEvents__IV(eventBitsToAdd){
  this.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_Event_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(this.com_google_gwt_user_client_ui_CheckBox_inputElem, eventBitsToAdd | (this.com_google_gwt_user_client_ui_CheckBox_inputElem.__eventBits || 0)):this.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(this.com_google_gwt_user_client_ui_UIObject_element, eventBitsToAdd | (this.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this.com_google_gwt_user_client_ui_Widget_eventsToSink |= eventBitsToAdd);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CheckBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'CheckBox', 113);
function com_google_gwt_user_client_ui_DecoratorPanel_$getCellElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2IILcom_google_gwt_user_client_Element_2(this$static){
  var td, tr;
  tr = this$static.com_google_gwt_user_client_ui_DecoratorPanel_tbody.children[0];
  td = tr.children[1];
  return com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td);
}

function com_google_gwt_user_client_ui_DecoratorPanel_DecoratorPanel___3Ljava_lang_String_2IV(rowStyles){
  var i, row, table, com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0;
  com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V.call(this, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'table'));
  table = this.com_google_gwt_user_client_ui_UIObject_element;
  this.com_google_gwt_user_client_ui_DecoratorPanel_tbody = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(table, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_DecoratorPanel_tbody));
  table[$intern_19] = 0;
  table[$intern_59] = 0;
  for (i = 0; i < rowStyles.length; i++) {
    row = (com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0 = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'tr') , com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0.className = rowStyles[i] || '' , undefined , com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_DecoratorPanel_createTD__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(rowStyles[i] + 'Left'))) , com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_DecoratorPanel_createTD__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(rowStyles[i] + 'Center'))) , com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_DecoratorPanel_createTD__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(rowStyles[i] + 'Right'))) , com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0);
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_DecoratorPanel_tbody, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(row));
    i == 1 && (this.com_google_gwt_user_client_ui_DecoratorPanel_containerElem = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(row.children[1]));
  }
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-DecoratorPanel';
}

function com_google_gwt_user_client_ui_DecoratorPanel_createTD__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(styleName){
  var inner, tdElem;
  tdElem = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'td');
  inner = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, $intern_15);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(tdElem, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(inner));
  tdElem.className = styleName || '';
  inner.className = styleName + 'Inner' || '';
  return tdElem;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(254, 86, $intern_14, com_google_gwt_user_client_ui_DecoratorPanel_DecoratorPanel___3Ljava_lang_String_2IV);
_.getContainerElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_DecoratorPanel_getContainerElement__Lcom_google_gwt_user_client_Element_2(){
  return this.com_google_gwt_user_client_ui_DecoratorPanel_containerElem;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DecoratorPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'DecoratorPanel', 254);
function com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1CENTER = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V((com_google_gwt_dom_client_Style$TextAlign_$clinit__V() , 'center'));
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('justify');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('left');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('right');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
}

var com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1CENTER, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT;
function com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV(element){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, element);
  this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_UIObject_element);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(65, 7, $intern_13);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1LabelBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'LabelBase', 65);
function com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static, text_0){
  com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, text_0);
}

function com_google_gwt_user_client_ui_Label_Label__V(){
  com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV.call(this, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, $intern_15));
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-Label';
}

function com_google_gwt_user_client_ui_Label_Label__Lcom_google_gwt_dom_client_Element_2V(element){
  com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV.call(this, (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('span', com_google_gwt_dom_client_DOMImplTrident_$getTagName__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(element)) , element));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(18, 65, $intern_13, com_google_gwt_user_client_ui_Label_Label__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Label_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Label', 18);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(244, 18, $intern_13);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTML_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HTML', 244);
function com_google_gwt_user_client_ui_DialogBox$CaptionImpl_DialogBox$CaptionImpl__V(){
  com_google_gwt_user_client_ui_Label_Label__Lcom_google_gwt_dom_client_Element_2V.call(this, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, $intern_15));
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-HTML';
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'Caption';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(245, 244, $intern_13, com_google_gwt_user_client_ui_DialogBox$CaptionImpl_DialogBox$CaptionImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DialogBox$CaptionImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'DialogBox/CaptionImpl', 245);
function com_google_gwt_user_client_ui_DialogBox$MouseHandler_DialogBox$MouseHandler__Lcom_google_gwt_user_client_ui_DialogBox_2V(this$0){
  this.com_google_gwt_user_client_ui_DialogBox$MouseHandler_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(246, 1, {310:1, 314:1, 312:1, 313:1, 311:1, 34:1}, com_google_gwt_user_client_ui_DialogBox$MouseHandler_DialogBox$MouseHandler__Lcom_google_gwt_user_client_ui_DialogBox_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DialogBox$MouseHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'DialogBox/MouseHandler', 246);
function com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static, content){
  com_google_gwt_dom_client_DOMImplTrident_$setInnerText__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, content);
  if (this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir != this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir) {
    this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
    com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir);
  }
}

function com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(element){
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_element = element;
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(element);
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(104, 1, {}, com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DirectionalTextHelper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'DirectionalTextHelper', 104);
function com_google_gwt_user_client_ui_FlowPanel_$add__Lcom_google_gwt_user_client_ui_FlowPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_FlowPanel_FlowPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, $intern_15));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(112, 76, $intern_14, com_google_gwt_user_client_ui_FlowPanel_FlowPanel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FlowPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'FlowPanel', 112);
function com_google_gwt_user_client_ui_HTMLTable_$checkCellBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV(this$static, row, column){
  var cellSize;
  com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row);
  if (column < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Column ' + column + ' must be non-negative: ' + column));
  }
  cellSize = this$static.com_google_gwt_user_client_ui_Grid_numColumns;
  if (cellSize <= column) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_60 + column + $intern_61 + this$static.com_google_gwt_user_client_ui_Grid_numColumns));
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row){
  var rowSize;
  rowSize = this$static.com_google_gwt_user_client_ui_Grid_numRows;
  if (row >= rowSize || row < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_62 + row + $intern_63 + rowSize));
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_dom_client_Element_2(this$static, row, column, clearInnerHTML){
  var td;
  td = com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getRawElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2IILcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter, row, column);
  com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, td, clearInnerHTML);
  return td;
}

function com_google_gwt_user_client_ui_HTMLTable_$clear__Lcom_google_gwt_user_client_ui_HTMLTable_2ZV(this$static){
  var col, row, td;
  for (row = 0; row < this$static.com_google_gwt_user_client_ui_Grid_numRows; ++row) {
    for (col = 0; col < this$static.com_google_gwt_user_client_ui_Grid_numColumns; ++col) {
      td = com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getRawElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2IILcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter, row, col);
      com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, td, false);
    }
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td);
  widget = null;
  !!maybeChild && (widget = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_impl_ElementMapperImpl_$get__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, maybeChild), 7));
  if (widget) {
    com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = '' , undefined);
    return false;
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, widget){
  var elem;
  if (widget.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, null);
  }
   finally {
    elem = widget.com_google_gwt_user_client_ui_UIObject_element;
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem), elem);
    com_google_gwt_user_client_impl_ElementMapperImpl_$removeByElement__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, elem);
  }
  return true;
}

function com_google_gwt_user_client_ui_HTMLTable_$removeRow__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row){
  var column, columnCount, td;
  columnCount = this$static.com_google_gwt_user_client_ui_Grid_numColumns;
  for (column = 0; column < columnCount; ++column) {
    td = com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getRawElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2IILcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter, row, column);
    com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, td, false);
  }
  com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, row));
}

function com_google_gwt_user_client_ui_HTMLTable_$setCellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2V(this$static, cellFormatter){
  this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter = cellFormatter;
}

function com_google_gwt_user_client_ui_HTMLTable_$setColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static, formatter){
  !!this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter && (formatter.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup);
  this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter = formatter;
  com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$prepareColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter);
}

function com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(this$static, row, column, widget){
  var td;
  com_google_gwt_user_client_ui_Grid_$prepareCell__Lcom_google_gwt_user_client_ui_Grid_2IIV(this$static, row, column);
  td = com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_dom_client_Element_2(this$static, row, column, true);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  com_google_gwt_user_client_impl_ElementMapperImpl_$put__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_ui_UIObject_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, widget);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(td, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(widget.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(226, 285, $intern_14);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_HTMLTable_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_HTMLTable_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(widget){
  return com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, widget);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HTMLTable', 226);
function com_google_gwt_user_client_ui_Grid_$prepareCell__Lcom_google_gwt_user_client_ui_Grid_2IIV(this$static, row, column){
  com_google_gwt_user_client_ui_Grid_$prepareRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static, row);
  if (column < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Cannot access a column with a negative index: ' + column));
  }
  if (column >= this$static.com_google_gwt_user_client_ui_Grid_numColumns) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_60 + column + $intern_61 + this$static.com_google_gwt_user_client_ui_Grid_numColumns));
  }
}

function com_google_gwt_user_client_ui_Grid_$prepareRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static, row){
  if (row < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Cannot access a row with a negative index: ' + row));
  }
  if (row >= this$static.com_google_gwt_user_client_ui_Grid_numRows) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_62 + row + $intern_63 + this$static.com_google_gwt_user_client_ui_Grid_numRows));
  }
}

function com_google_gwt_user_client_ui_Grid_$removeRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static, row){
  com_google_gwt_user_client_ui_HTMLTable_$removeRow__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row);
  --this$static.com_google_gwt_user_client_ui_Grid_numRows;
}

function com_google_gwt_user_client_ui_Grid_$resizeColumns__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static){
  var i, j, com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0, com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0;
  if (this$static.com_google_gwt_user_client_ui_Grid_numColumns == 5) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_Grid_numColumns > 5) {
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_Grid_numRows; i++) {
      for (j = this$static.com_google_gwt_user_client_ui_Grid_numColumns - 1; j >= 5; j--) {
        com_google_gwt_user_client_ui_HTMLTable_$checkCellBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV(this$static, i, j);
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0 = com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_dom_client_Element_2(this$static, i, j, false);
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0 = com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, i);
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0.removeChild(com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0);
      }
    }
  }
   else {
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_Grid_numRows; i++) {
      for (j = this$static.com_google_gwt_user_client_ui_Grid_numColumns; j < 5; j++) {
        com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0 = com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, i);
        com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0 = (com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0 = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'td') , com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0.innerHTML = '&nbsp;' , com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0);
        com_google_gwt_user_client_impl_DOMImplTrident_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0), j);
      }
    }
  }
  this$static.com_google_gwt_user_client_ui_Grid_numColumns = 5;
  com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$resizeColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2IZV(this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter, 5, false);
}

function com_google_gwt_user_client_ui_Grid_$resizeRows__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static){
  if (this$static.com_google_gwt_user_client_ui_Grid_numRows == 4) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_Grid_numRows < 4) {
    com_google_gwt_user_client_ui_Grid_addRows__Lcom_google_gwt_dom_client_Element_2IIV(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, 4 - this$static.com_google_gwt_user_client_ui_Grid_numRows, this$static.com_google_gwt_user_client_ui_Grid_numColumns);
    this$static.com_google_gwt_user_client_ui_Grid_numRows = 4;
  }
   else {
    while (this$static.com_google_gwt_user_client_ui_Grid_numRows > 4) {
      com_google_gwt_user_client_ui_Grid_$removeRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static, this$static.com_google_gwt_user_client_ui_Grid_numRows - 1);
    }
  }
}

function com_google_gwt_user_client_ui_Grid_Grid__IIV(){
  this.com_google_gwt_user_client_ui_HTMLTable_widgetMap = new com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V;
  this.com_google_gwt_user_client_ui_HTMLTable_tableElem = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'table');
  this.com_google_gwt_user_client_ui_HTMLTable_bodyElem = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_HTMLTable_tableElem, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_HTMLTable_bodyElem));
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, this.com_google_gwt_user_client_ui_HTMLTable_tableElem);
  com_google_gwt_user_client_ui_HTMLTable_$setCellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2V(this, new com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this));
  com_google_gwt_user_client_ui_HTMLTable_$setColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this, new com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this));
  com_google_gwt_user_client_ui_Grid_$resizeColumns__Lcom_google_gwt_user_client_ui_Grid_2IV(this);
  com_google_gwt_user_client_ui_Grid_$resizeRows__Lcom_google_gwt_user_client_ui_Grid_2IV(this);
}

function com_google_gwt_user_client_ui_Grid_addRows__Lcom_google_gwt_dom_client_Element_2IIV(table, rows_0, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows_0; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(85, 226, $intern_14, com_google_gwt_user_client_ui_Grid_Grid__IIV);
_.com_google_gwt_user_client_ui_Grid_numColumns = 0;
_.com_google_gwt_user_client_ui_Grid_numRows = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Grid_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Grid', 85);
function com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this$static){
  while (++this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex < this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_array.length) {
    if (java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex) != null) {
      return;
    }
  }
}

function com_google_gwt_user_client_ui_HTMLTable$1_$next__Lcom_google_gwt_user_client_ui_HTMLTable$1_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  var result;
  if (this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex >= this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_array.length) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  result = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex), 7);
  this$static.com_google_gwt_user_client_ui_HTMLTable$1_lastIndex = this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex;
  com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this$static);
  return result;
}

function com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$1_this$01 = this$0;
  this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList = this.com_google_gwt_user_client_ui_HTMLTable$1_this$01.com_google_gwt_user_client_ui_HTMLTable_widgetMap.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList;
  com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(229, 1, {}, com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V);
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_HTMLTable$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_HTMLTable$1_$next__Lcom_google_gwt_user_client_ui_HTMLTable$1_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.hasNext__Z = function com_google_gwt_user_client_ui_HTMLTable$1_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex < this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_array.length;
}
;
_.remove__V = function com_google_gwt_user_client_ui_HTMLTable$1_remove__V(){
  var w;
  if (this.com_google_gwt_user_client_ui_HTMLTable$1_lastIndex < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__V);
  }
  w = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this.com_google_gwt_user_client_ui_HTMLTable$1_lastIndex), 7);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(w);
  this.com_google_gwt_user_client_ui_HTMLTable$1_lastIndex = -1;
}
;
_.com_google_gwt_user_client_ui_HTMLTable$1_lastIndex = -1;
_.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex = -1;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HTMLTable/1', 229);
function com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getCellElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2Lcom_google_gwt_dom_client_Element_2IILcom_google_gwt_dom_client_Element_2(tbody, row, col){
  return com_google_gwt_user_client_ui_HTMLTable$HTMLTableIEImpl_$getCells__Lcom_google_gwt_user_client_ui_HTMLTable$HTMLTableIEImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_core_client_JsArray_2(tbody.children[row])[col];
}

function com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getRawElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2IILcom_google_gwt_dom_client_Element_2(this$static, row, column){
  return com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getCellElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2Lcom_google_gwt_dom_client_Element_2IILcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$01.com_google_gwt_user_client_ui_HTMLTable_bodyElem, row, column);
}

function com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(227, 1, {}, com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$CellFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HTMLTable/CellFormatter', 227);
function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$prepareColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup) {
    this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'colgroup');
    com_google_gwt_user_client_impl_DOMImplTrident_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$01.com_google_gwt_user_client_ui_HTMLTable_tableElem, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup), 0);
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'col')));
  }
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$resizeColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2IZV(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup, this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.lastChild);
    }
  }
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(228, 1, {}, com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$ColumnFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HTMLTable/ColumnFormatter', 228);
function com_google_gwt_user_client_ui_HTMLTable$HTMLTableIEImpl_$getCells__Lcom_google_gwt_user_client_ui_HTMLTable$HTMLTableIEImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_core_client_JsArray_2(row){
  return row.children;
}

function com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_user_client_Element_2(tbody, row){
  return tbody.children[row];
}

function com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('bottom');
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('middle');
  com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP = new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('top');
}

var com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(296, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$AutoHorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 296);
function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V(textAlignString){
  this.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = textAlignString;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(64, 296, {}, com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$HorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HasHorizontalAlignment/HorizontalAlignmentConstant', 64);
function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V(verticalAlignString){
  this.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = verticalAlignString;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(80, 1, {}, com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasVerticalAlignment$VerticalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HasVerticalAlignment/VerticalAlignmentConstant', 80);
function com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0;
  td = (com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0 = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'td') , com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0['align'] = this$static.com_google_gwt_user_client_ui_HorizontalPanel_horzAlign.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString , undefined , com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_HorizontalPanel_vertAlign) , com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HorizontalPanel_tableRow, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td));
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, td);
}

function com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V(){
  com_google_gwt_user_client_ui_CellPanel_CellPanel__V.call(this);
  this.com_google_gwt_user_client_ui_HorizontalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_HorizontalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'tr');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow));
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = '0';
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_59] = '0';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(69, 102, $intern_14, com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_HorizontalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed, td;
  td = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element);
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow, td);
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HorizontalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HorizontalPanel', 69);
function com_google_gwt_user_client_ui_Image_$clinit__V(){
  com_google_gwt_user_client_ui_Image_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new java_util_HashMap_HashMap__V;
}

function com_google_gwt_user_client_ui_Image_$changeState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_user_client_ui_Image$State_2V(this$static, newState){
  this$static.com_google_gwt_user_client_ui_Image_state = newState;
}

function com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_safehtml_shared_SafeUri_2V(this$static, url_0){
  !!this$static.com_google_gwt_user_client_ui_Image_state && (this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_64] = '' , undefined);
  com_google_gwt_dom_client_ImageElement_$setSrc__Lcom_google_gwt_dom_client_ImageElement_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, url_0.com_google_gwt_safehtml_shared_SafeUriString_uri);
}

function com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Ljava_lang_String_2V(this$static, url_0){
  com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_safehtml_shared_SafeUri_2V(this$static, (com_google_gwt_safehtml_shared_UriUtils_$clinit__V() , new com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V(url_0)));
}

function com_google_gwt_user_client_ui_Image_Image__V(){
  com_google_gwt_user_client_ui_Image_$clinit__V();
  com_google_gwt_user_client_ui_Image_$changeState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_user_client_ui_Image$State_2V(this, new com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2V(this));
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-Image';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(109, 7, $intern_13, com_google_gwt_user_client_ui_Image_Image__V);
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Image_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type) == $intern_54 && !!this.com_google_gwt_user_client_ui_Image_state && (this.com_google_gwt_user_client_ui_UIObject_element[$intern_64] = '' , undefined);
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Image_onLoad__V(){
  com_google_gwt_user_client_ui_Image$State_$onLoad__Lcom_google_gwt_user_client_ui_Image$State_2Lcom_google_gwt_user_client_ui_Image_2V(this.com_google_gwt_user_client_ui_Image_state, this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Image', 109);
function com_google_gwt_user_client_ui_Image$State_$onLoad__Lcom_google_gwt_user_client_ui_Image$State_2Lcom_google_gwt_user_client_ui_Image_2V(this$static, image){
  var unhandledEvent;
  unhandledEvent = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(image.com_google_gwt_user_client_ui_UIObject_element, $intern_64);
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_53, unhandledEvent) && (this$static.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = new com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V(this$static, image) , com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), this$static.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(236, 1, {});
_.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$State_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Image/State', 236);
function com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V(this$1, val$image){
  this.com_google_gwt_user_client_ui_Image$State$1_this$11 = this$1;
  this.com_google_gwt_user_client_ui_Image$State$1_val$image2 = val$image;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(238, 1, {}, com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V);
_.execute__V = function com_google_gwt_user_client_ui_Image$State$1_execute__V(){
  var evt, com_google_gwt_dom_client_DOMImplTrident_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0;
  if (this.com_google_gwt_user_client_ui_Image$State$1_val$image2.com_google_gwt_user_client_ui_Image_state != this.com_google_gwt_user_client_ui_Image$State$1_this$11 || this != this.com_google_gwt_user_client_ui_Image$State$1_this$11.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand) {
    return;
  }
  this.com_google_gwt_user_client_ui_Image$State$1_this$11.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = null;
  if (!this.com_google_gwt_user_client_ui_Image$State$1_val$image2.com_google_gwt_user_client_ui_Widget_attached) {
    this.com_google_gwt_user_client_ui_Image$State$1_val$image2.com_google_gwt_user_client_ui_UIObject_element[$intern_64] = $intern_53;
    return;
  }
  evt = (com_google_gwt_dom_client_DOMImplTrident_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0 = $doc.createEventObject() , com_google_gwt_dom_client_DOMImplTrident_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0.type = $intern_53 , com_google_gwt_dom_client_DOMImplTrident_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0);
  com_google_gwt_dom_client_DOMImplTrident_$dispatchEvent__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_NativeEvent_2V(this.com_google_gwt_user_client_ui_Image$State$1_val$image2.com_google_gwt_user_client_ui_UIObject_element, evt);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$State$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Image/State/1', 238);
function com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2V(image){
  com_google_gwt_user_client_ui_Widget_$replaceElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2V(image, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'img'));
  com_google_gwt_user_client_Event_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(image.com_google_gwt_user_client_ui_UIObject_element, $intern_54);
  image.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(image.com_google_gwt_user_client_ui_UIObject_element, 133398655 | (image.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(image.com_google_gwt_user_client_ui_Widget_eventsToSink |= 133398655);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(237, 236, {}, com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$UnclippedState_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'Image/UnclippedState', 237);
function com_google_gwt_user_client_ui_ListBox_$checkIndex__Lcom_google_gwt_user_client_ui_ListBox_2IV(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.com_google_gwt_user_client_ui_UIObject_element.options.length) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V);
  }
}

function com_google_gwt_user_client_ui_ListBox_$getOptionText__Lcom_google_gwt_user_client_ui_ListBox_2Lcom_google_gwt_dom_client_OptionElement_2Ljava_lang_String_2(option){
  var text_0, com_google_gwt_dom_client_DOMImplTrident_$hasAttribute__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z_node_0;
  text_0 = option.text;
  (com_google_gwt_dom_client_DOMImplTrident_$hasAttribute__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z_node_0 = option.getAttributeNode($intern_65) , !!(com_google_gwt_dom_client_DOMImplTrident_$hasAttribute__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z_node_0 && com_google_gwt_dom_client_DOMImplTrident_$hasAttribute__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z_node_0.specified)) && text_0.length > 1 && (text_0 = java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(text_0, 1, text_0.length - 1));
  return text_0;
}

function com_google_gwt_user_client_ui_ListBox_$getSelectedItemText__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2(this$static){
  var index_0;
  index_0 = this$static.com_google_gwt_user_client_ui_UIObject_element.selectedIndex;
  return index_0 == -1?null:(com_google_gwt_user_client_ui_ListBox_$checkIndex__Lcom_google_gwt_user_client_ui_ListBox_2IV(this$static, index_0) , com_google_gwt_user_client_ui_ListBox_$getOptionText__Lcom_google_gwt_user_client_ui_ListBox_2Lcom_google_gwt_dom_client_OptionElement_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element.options[index_0]));
}

function com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2IV(this$static, item_0){
  com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2Ljava_lang_String_2IV(this$static, item_0, item_0, -1);
}

function com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2Ljava_lang_String_2IV(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = this$static.com_google_gwt_user_client_ui_UIObject_element;
  option = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'option');
  option.text = item_0;
  option.removeAttribute($intern_65);
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    com_google_gwt_dom_client_DOMImplTrident_$selectAdd__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_SelectElement_2Lcom_google_gwt_dom_client_OptionElement_2Lcom_google_gwt_dom_client_OptionElement_2V(select, option, null);
  }
   else {
    before = select.options[index_0];
    com_google_gwt_dom_client_DOMImplTrident_$selectAdd__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_SelectElement_2Lcom_google_gwt_dom_client_OptionElement_2Lcom_google_gwt_dom_client_OptionElement_2V(select, option, before);
  }
}

function com_google_gwt_user_client_ui_ListBox_ListBox__V(){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'select'));
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-ListBox';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(225, 81, $intern_13, com_google_gwt_user_client_ui_ListBox_ListBox__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ListBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'ListBox', 225);
function com_google_gwt_user_client_ui_PopupPanel$1_$onResize__Lcom_google_gwt_user_client_ui_PopupPanel$1_2Lcom_google_gwt_event_logical_shared_ResizeEvent_2V(){
  var height, width_0, winHeight, winWidth;
  null.$_nullMethod();
  winWidth = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
  winHeight = com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
  null.$_nullMethod((com_google_gwt_dom_client_Style$Display_$clinit__V() , 'none'));
  null.$_nullMethod((com_google_gwt_dom_client_Style$Unit_$clinit__V() , '0.0px'));
  null.$_nullMethod('0.0px');
  width_0 = com_google_gwt_dom_client_Document_$getScrollWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
  height = com_google_gwt_dom_client_Document_$getScrollHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
  null.$_nullMethod((width_0 > winWidth?width_0:winWidth) + 'px');
  null.$_nullMethod((height > winHeight?height:winHeight) + 'px');
  null.$_nullMethod('block');
}

function com_google_gwt_user_client_ui_PopupPanel$1_PopupPanel$1__Lcom_google_gwt_user_client_ui_PopupPanel_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(248, 1, {306:1, 34:1}, com_google_gwt_user_client_ui_PopupPanel$1_PopupPanel$1__Lcom_google_gwt_user_client_ui_PopupPanel_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'PopupPanel/1', 248);
function com_google_gwt_user_client_ui_PopupPanel$3_PopupPanel$3__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$0){
  this.com_google_gwt_user_client_ui_PopupPanel$3_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(249, 1, {34:1, 307:1}, com_google_gwt_user_client_ui_PopupPanel$3_PopupPanel$3__Lcom_google_gwt_user_client_ui_PopupPanel_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'PopupPanel/3', 249);
function com_google_gwt_user_client_ui_PopupPanel$4_PopupPanel$4__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$0){
  this.com_google_gwt_user_client_ui_PopupPanel$4_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(250, 1, {309:1, 34:1}, com_google_gwt_user_client_ui_PopupPanel$4_PopupPanel$4__Lcom_google_gwt_user_client_ui_PopupPanel_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'PopupPanel/4', 250);
function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$maybeShowGlass__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static){
  if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_isGlassEnabled) {
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_glass);
      this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_resizeRegistration = com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_glassResizer);
      com_google_gwt_user_client_ui_PopupPanel$1_$onResize__Lcom_google_gwt_user_client_ui_PopupPanel$1_2Lcom_google_gwt_event_logical_shared_ResizeEvent_2V();
      this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_glassShowing = true;
    }
  }
   else if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_glassShowing) {
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_glass);
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_resizeRegistration.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_resizeRegistration = null;
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_glassShowing = false;
  }
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$maybeShowGlass__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_isUnloading || com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style['clip'] = 'rect(auto, auto, auto, auto)';
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_27] = 'visible';
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onInstantaneousRun__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static){
  com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$maybeShowGlass__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
  if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style['position'] = 'absolute';
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition != -1 && com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_leftPosition, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition);
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
   else {
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_isUnloading || com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_27] = 'visible';
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2DV(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = com_google_gwt_lang_Cast_round_1int__DI(progress * this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight);
  width_0 = com_google_gwt_lang_Cast_round_1int__DI(progress * this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth);
  switch (0) {
    case 0:
      top_0 = this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight - height >> 1;
      left = this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  com_google_gwt_user_client_ui_impl_PopupImpl_$setClip__Lcom_google_gwt_user_client_ui_impl_PopupImpl_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element, 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2ZZV(this$static, isUnloading){
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_isUnloading = isUnloading;
  com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static);
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_showing = false;
  com_google_gwt_user_client_ui_PopupPanel_$updateHandlers__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing = false;
  com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onInstantaneousRun__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_PopupPanel$ResizeAnimation__Lcom_google_gwt_user_client_ui_PopupPanel_2V(panel){
  com_google_gwt_animation_client_Animation_Animation__Lcom_google_gwt_animation_client_AnimationScheduler_2V.call(this, (!com_google_gwt_animation_client_AnimationScheduler_instance && (com_google_gwt_animation_client_AnimationScheduler_instance = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V:new com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V) , com_google_gwt_animation_client_AnimationScheduler_instance));
  this.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel = panel;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(247, 110, {}, com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_PopupPanel$ResizeAnimation__Lcom_google_gwt_user_client_ui_PopupPanel_2V);
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel = null;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_glassShowing = false;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_isUnloading = false;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight = 0;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth = -1;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$ResizeAnimation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'PopupPanel/ResizeAnimation', 247);
function com_google_gwt_user_client_ui_PotentialElement_$clinit__V(){
  com_google_gwt_user_client_ui_PotentialElement_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_PotentialElement_declareShim__V();
}

function com_google_gwt_user_client_ui_PotentialElement_$setResolver__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2(this$static, resolver){
  com_google_gwt_user_client_ui_PotentialElement_$clinit__V();
  this$static.__gwt_resolve = com_google_gwt_user_client_ui_PotentialElement_buildResolveCallback__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(resolver);
}

function com_google_gwt_user_client_ui_PotentialElement_buildResolveCallback__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(resolver){
  return function(){
    this.__gwt_resolve = com_google_gwt_user_client_ui_PotentialElement_cannotResolveTwice__V;
    return resolver.resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2();
  }
  ;
}

function com_google_gwt_user_client_ui_PotentialElement_cannotResolveTwice__V(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function com_google_gwt_user_client_ui_PotentialElement_declareShim__V(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = new java_util_HashMap_HashMap__V;
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  this.com_google_gwt_user_client_ui_UIObject_element = elem , undefined;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    widget.onDetach__V();
  }
   finally {
    java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, widget);
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map);
    java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_rootPanels);
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var rp;
  rp = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, null), 61);
  if (rp) {
    return rp;
  }
  java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(com_google_gwt_user_client_ui_RootPanel_rootPanels) == 0 && com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
  rp = new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V;
  java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, null, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(61, 123, $intern_66);
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'RootPanel', 61);
function com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(128, 1, {}, com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.isAttached__Z() && w.onDetach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'RootPanel/1', 128);
function com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(129, 1, {305:1, 34:1}, com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'RootPanel/2', 129);
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V(){
  com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.body);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(127, 61, $intern_66, com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$DefaultRootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'RootPanel/DefaultRootPanel', 127);
function com_google_gwt_user_client_ui_SimplePanel$1_$next__Lcom_google_gwt_user_client_ui_SimplePanel$1_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (!this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement || !this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
  return this$static.com_google_gwt_user_client_ui_SimplePanel$1_returned = this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget;
}

function com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this$0){
  this.com_google_gwt_user_client_ui_SimplePanel$1_this$01 = this$0;
  this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = !!this.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(111, 1, {}, com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V);
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_SimplePanel$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_SimplePanel$1_$next__Lcom_google_gwt_user_client_ui_SimplePanel$1_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.hasNext__Z = function com_google_gwt_user_client_ui_SimplePanel$1_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement;
}
;
_.remove__V = function com_google_gwt_user_client_ui_SimplePanel$1_remove__V(){
  !!this.com_google_gwt_user_client_ui_SimplePanel$1_returned && this.com_google_gwt_user_client_ui_SimplePanel$1_this$01.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_SimplePanel$1_returned);
}
;
_.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
_.com_google_gwt_user_client_ui_SimplePanel$1_returned = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'SimplePanel/1', 111);
function com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static){
  return com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'value');
}

function com_google_gwt_user_client_ui_ValueBoxBase_$getValueOrThrow__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_Object_2(this$static){
  var parseResult, text_0;
  text_0 = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'value');
  parseResult = (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(text_0) , text_0);
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('', text_0)) {
    return null;
  }
  return parseResult;
}

function com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(196, 81, $intern_13);
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_ValueBoxBase_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  var type_0;
  type_0 = com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type);
  (type_0 & 896) != 0?com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0):com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_ValueBoxBase_onLoad__V(){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'ValueBoxBase', 196);
function com_google_gwt_user_client_ui_TextBoxBase_$clinit__V(){
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(197, 196, $intern_13);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'TextBoxBase', 197);
function com_google_gwt_user_client_ui_TextBox_TextBox__V(){
  var com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0;
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V();
  com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V.call(this, (com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0 = $doc.createElement('INPUT') , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0.type = 'text' , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0));
}

function com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(element){
  com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V.call(this, (!com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V) , !com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V) , element));
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-TextBox';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(53, 197, $intern_13, com_google_gwt_user_client_ui_TextBox_TextBox__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'TextBox', 53);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV;
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit, 1), $intern_17, 30, 0, [com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(30, 5, $intern_67);
var com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_11, 'ValueBoxBase/TextAlignment', 30, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(198, 30, $intern_67, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_11, 'ValueBoxBase/TextAlignment/1', 198, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(199, 30, $intern_67, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_11, 'ValueBoxBase/TextAlignment/2', 199, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(200, 30, $intern_67, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_11, 'ValueBoxBase/TextAlignment/3', 200, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(201, 30, $intern_67, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_11, 'ValueBoxBase/TextAlignment/4', 201, null);
function com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, tr, com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0;
  tr = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'tr');
  td = (com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0 = com_google_gwt_dom_client_DOMImplTrident_$createElement__Lcom_google_gwt_dom_client_DOMImplTrident_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, 'td') , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0['align'] = this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString , undefined , com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_VerticalPanel_vertAlign) , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(tr, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td));
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(tr));
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, td);
}

function com_google_gwt_user_client_ui_VerticalPanel_$setHorizontalAlignment__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(this$static, align_0){
  this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = align_0;
}

function com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V(){
  com_google_gwt_user_client_ui_CellPanel_CellPanel__V.call(this);
  this.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_VerticalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_19] = '0';
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_59] = '0';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(26, 102, $intern_14, com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_VerticalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed, td;
  td = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element);
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(td));
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1VerticalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'VerticalPanel', 26);
function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V);
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_17, 7, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i0) {
      newArray[i0] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i0];
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1];
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array[beforeIndex] = w;
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V);
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index_0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1];
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection_size] = null;
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index_0;
  index_0 = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index_0 == -1) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0);
}

function com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(parent_0){
  this.com_google_gwt_user_client_ui_WidgetCollection_parent = parent_0;
  this.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_17, 7, 4, 0, 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(154, 1, {}, com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'WidgetCollection', 154);
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__V);
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget);
  --this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = null;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$0){
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(79, 1, {}, com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V);
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.hasNext__Z = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;
}
;
_.remove__V = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__V(){
  com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection$WidgetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'WidgetCollection/WidgetIterator', 79);
function com_google_gwt_user_client_ui_impl_PopupImpl_$setClip__Lcom_google_gwt_user_client_ui_impl_PopupImpl_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(popup, rect){
  popup.style['clip'] = rect;
}

function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplIe8_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe8_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('ie8', runtimeValue)) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue));
  }
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(73, 4, $intern_33);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Error', 73);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(20, 73, $intern_33);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'AssertionError', 20);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, $intern_68 + runtimeValue + $intern_69 + $intern_70 == null?$intern_35:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2($intern_68 + runtimeValue + $intern_69 + $intern_70), com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_68 + runtimeValue + $intern_69 + $intern_70, 4)?com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_68 + runtimeValue + $intern_69 + $intern_70, 4):null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(115, 20, $intern_33, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 115);
function com_google_gwt_useragent_client_UserAgentImplIe8_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe8_2Ljava_lang_String_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(_this);
  }
  );
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static){
  com_google_gwt_event_shared_HandlerManager$Bus_$doRemove__Lcom_google_gwt_event_shared_HandlerManager$Bus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_this$01, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type2, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source3, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler4);
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler4 = val$handler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(150, 1, {}, com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'SimpleEventBus/1', 150);
function com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4 = val$handler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(151, 1, {270:1}, com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$2_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'SimpleEventBus/2', 151);
function com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$source, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source3 = val$source;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler4 = val$handler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(152, 1, {270:1}, com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$3_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$01, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type2, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source3, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler4);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'SimpleEventBus/3', 152);
function java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V(string){
  this.java_lang_AbstractStringBuilder_string = string;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(119, 1, {116:1});
_.toString__Ljava_lang_String_2 = function java_lang_AbstractStringBuilder_toString__Ljava_lang_String_2(){
  return this.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'AbstractStringBuilder', 119);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(131, 15, $intern_33, java_lang_ArrayStoreException_ArrayStoreException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ArrayStoreException', 131);
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_lang_Boolean_FALSE = (java_lang_Boolean_$clinit__V() , false);
}

com_google_gwt_lang_Cast_booleanCastMap = {3:1, 6:1};
var java_lang_Boolean_FALSE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Boolean', 281);
function java_lang_ClassCastException_ClassCastException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(118, 15, $intern_33, java_lang_ClassCastException_ClassCastException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ClassCastException', 118);
function java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(s){
  java_lang_Number_floatRegex == null && (java_lang_Number_floatRegex = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);
  if (!java_lang_Number_floatRegex.test(s)) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V('For input string: "' + s + '"'));
  }
  return parseFloat(s);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(59, 1, {3:1, 59:1});
var java_lang_Number_floatRegex;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Number', 59);
com_google_gwt_lang_Cast_doubleCastMap = {3:1, 6:1, 59:1};
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Double', 282);
function java_lang_Float_Float__FV(value_0){
  this.java_lang_Float_value = value_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(35, 59, {3:1, 6:1, 35:1, 59:1}, java_lang_Float_Float__FV);
_.equals__Ljava_lang_Object_2Z = function java_lang_Float_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 35) && com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 35).java_lang_Float_value == this.java_lang_Float_value;
}
;
_.hashCode__I = function java_lang_Float_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI(this.java_lang_Float_value);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Float_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Float_value;
}
;
_.java_lang_Float_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Float_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Float', 35);
function java_lang_IllegalArgumentException_IllegalArgumentException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(32, 15, $intern_33, java_lang_IllegalArgumentException_IllegalArgumentException__V, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IllegalArgumentException', 32);
function java_lang_IllegalStateException_IllegalStateException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(25, 15, $intern_33, java_lang_IllegalStateException_IllegalStateException__V, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IllegalStateException', 25);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(22, 15, $intern_33, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IndexOutOfBoundsException', 22);
function java_lang_Integer_Integer__IV(value_0){
  this.java_lang_Integer_value = value_0;
}

function java_lang_Integer_valueOf__ILjava_lang_Integer_2(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (java_lang_Integer$BoxedValues_$clinit__V() , java_lang_Integer$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Integer$BoxedValues_boxedValues[rebase] = new java_lang_Integer_Integer__IV(i));
    return result;
  }
  return new java_lang_Integer_Integer__IV(i);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(21, 59, {3:1, 6:1, 21:1, 59:1}, java_lang_Integer_Integer__IV);
_.equals__Ljava_lang_Object_2Z = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 21) && com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 21).java_lang_Integer_value == this.java_lang_Integer_value;
}
;
_.hashCode__I = function java_lang_Integer_hashCode__I(){
  return this.java_lang_Integer_value;
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Integer_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Integer_value;
}
;
_.java_lang_Integer_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Integer', 21);
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit, $intern_17, 21, 256, 0, 1);
}

var java_lang_Integer$BoxedValues_boxedValues;
function java_lang_Math_max__III(y_0){
  return 5 > y_0?5:y_0;
}

function java_lang_NullPointerException_NullPointerException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(23, 75, $intern_33, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V);
_.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2 = function java_lang_NullPointerException_createError__Ljava_lang_String_2Ljava_lang_Object_2(msg){
  return new $wnd.TypeError(msg);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'NullPointerException', 23);
function java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V(message){
  java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(74, 32, {3:1, 74:1, 4:1}, java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NumberFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'NumberFormatException', 74);
function java_lang_String_$charAt__Ljava_lang_String_2IC(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  return javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other;
}

function java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, other){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static);
  if (other == null) {
    return false;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.toLowerCase(), other.toLowerCase());
}

function java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.indexOf(str);
}

function java_lang_String_$substring__Ljava_lang_String_2ILjava_lang_String_2(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

com_google_gwt_lang_Cast_stringCastMap = {3:1, 116:1, 6:1, 2:1};
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'String', 2);
function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(s){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(s) , s));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(60, 119, {116:1}, java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'StringBuilder', 60);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(332, 1, {});
function java_lang_UnsupportedOperationException_UnsupportedOperationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(49, 15, $intern_33, java_lang_UnsupportedOperationException_UnsupportedOperationException__V, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'UnsupportedOperationException', 49);
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    e = iter.next__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(o) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(e) || o != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, e)) {
      remove && iter.remove__V();
      return true;
    }
  }
  return false;
}

function java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var e, e$iterator;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    if (!this$static.contains__Ljava_lang_Object_2Z(e)) {
      return false;
    }
  }
  return true;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(288, 1, {});
_.add__Ljava_lang_Object_2Z = function java_util_AbstractCollection_add__Ljava_lang_Object_2Z(o){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this collection'));
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, false);
}
;
_.isEmpty__Z = function java_util_AbstractCollection_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractCollection_remove__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, true);
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractCollection_toString__Ljava_lang_String_2(){
  var e, e$iterator, joiner;
  joiner = new java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V('[', ']');
  for (e$iterator = this.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(joiner, e === this?'(this Collection)':e == null?$intern_35:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(e));
  }
  return !joiner.java_util_StringJoiner_builder?joiner.java_util_StringJoiner_emptyValue:joiner.java_util_StringJoiner_suffix.length == 0?joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + joiner.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractCollection', 288);
function java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey__Ljava_lang_Object_2();
  value_0 = entry.getValue__Ljava_lang_Object_2();
  ourValue = com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
  if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(ourValue) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key))) {
    return false;
  }
  return true;
}

function java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this$static, o){
  return o === this$static?'(this Map)':o == null?$intern_35:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(o);
}

function java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(entry){
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(287, 1, {58:1});
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 28)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 58);
  if (this.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size != otherMap.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + otherMap.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size) {
    return false;
  }
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(otherMap)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
    if (!java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I = function java_util_AbstractMap_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this));
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMap_toString__Ljava_lang_String_2(){
  var entry, entry$iterator, joiner;
  joiner = new java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V('{', '}');
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
    java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(joiner, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getKey__Ljava_lang_Object_2()) + '=' + java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getValue__Ljava_lang_Object_2()));
  }
  return !joiner.java_util_StringJoiner_builder?joiner.java_util_StringJoiner_emptyValue:joiner.java_util_StringJoiner_suffix.length == 0?joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + joiner.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap', 287);
function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
}

function java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null)):java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key);
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return key == null?!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):java_util_InternalStringMap_$contains__Ljava_util_InternalStringMap_2Ljava_lang_String_2Z(this$static.java_util_AbstractHashMap_stringMap, key);
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0):java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return key == null?java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null, value_0):java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key, value_0);
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key):java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this$static){
  var modCount;
  this$static.java_util_AbstractHashMap_hashCodeMap = new java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V(this$static);
  this$static.java_util_AbstractHashMap_stringMap = new java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V(this$static);
  modCount = this$static[$intern_72] | 0;
  this$static[$intern_72] = modCount + 1;
}

function java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this$static){
  return this$static.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this$static.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(77, 287, {58:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractHashMap', 77);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(289, 288, {48:1});
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 48)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 48);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, other);
}
;
_.hashCode__I = function java_util_AbstractSet_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractSet', 289);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 31)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 31));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(40, 289, {48:1}, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_remove__Ljava_lang_Object_2Z(entry){
  var key;
  if (java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, entry)) {
    key = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry, 31).getKey__Ljava_lang_Object_2();
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySet_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractHashMap$EntrySet_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractHashMap/EntrySet', 40);
function java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static){
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z()) {
    return true;
  }
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current != this$static.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries) {
    return false;
  }
  this$static.java_util_AbstractHashMap$EntrySetIterator_current = new java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_hashCodeMap);
  return this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z();
}

function java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this$static){
  var rv;
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext);
  this$static.java_util_AbstractHashMap$EntrySetIterator_last = this$static.java_util_AbstractHashMap$EntrySetIterator_current;
  rv = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 31);
  this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static);
  return rv;
}

function java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this$static){
  var java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V_modCount_0;
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(!!this$static.java_util_AbstractHashMap$EntrySetIterator_last);
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  this$static.java_util_AbstractHashMap$EntrySetIterator_last.remove__V();
  this$static.java_util_AbstractHashMap$EntrySetIterator_last = null;
  this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static);
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V_modCount_0 = this$static.java_util_AbstractHashMap$EntrySetIterator_this$01[$intern_72];
  this$static[$intern_72] = java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V_modCount_0;
}

function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  var modCount;
  this.java_util_AbstractHashMap$EntrySetIterator_this$01 = this$0;
  this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries = new java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_stringMap);
  this.java_util_AbstractHashMap$EntrySetIterator_current = this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries;
  this.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this);
  modCount = this$0[$intern_72];
  this[$intern_72] = modCount;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(41, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this);
}
;
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return this.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.remove__V = function java_util_AbstractHashMap$EntrySetIterator_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this);
}
;
_.java_util_AbstractHashMap$EntrySetIterator_hasNext = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractHashMap/EntrySetIterator', 41);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(290, 288, {27:1});
_.add__ILjava_lang_Object_2V = function java_util_AbstractList_add__ILjava_lang_Object_2V(index_0, element){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this list'));
}
;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}
;
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 27)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 27);
  if (this.size__I() != other.size__I()) {
    return false;
  }
  iterOther = other.iterator__Ljava_util_Iterator_2();
  for (elem$iterator = this.iterator__Ljava_util_Iterator_2(); elem$iterator.hasNext__Z();) {
    elem = elem$iterator.next__Ljava_lang_Object_2();
    elemOther = iterOther.next__Ljava_lang_Object_2();
    if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elem) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elemOther) || elem != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I = function java_util_AbstractList_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_util_List_2I(this);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_AbstractList_listIterator__Ljava_util_ListIterator_2(){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, 0);
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_AbstractList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, from);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_AbstractList_remove__ILjava_lang_Object_2(index_0){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Remove not supported on this list'));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractList', 290);
function java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this$static){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(this$static.java_util_AbstractList$IteratorImpl_last != -1);
  this$static.java_util_AbstractList$IteratorImpl_this$01.remove__ILjava_lang_Object_2(this$static.java_util_AbstractList$IteratorImpl_last);
  this$static.java_util_AbstractList$IteratorImpl_i = this$static.java_util_AbstractList$IteratorImpl_last;
  this$static.java_util_AbstractList$IteratorImpl_last = -1;
}

function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(96, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I());
  return this.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = this.java_util_AbstractList$IteratorImpl_i++);
}
;
_.remove__V = function java_util_AbstractList$IteratorImpl_remove__V(){
  java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this);
}
;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractList/IteratorImpl', 96);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  this.java_util_AbstractList$ListIteratorImpl_this$01 = this$0;
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(start_0, this$0.size__I());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(97, 96, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
_.remove__V = function java_util_AbstractList$ListIteratorImpl_remove__V(){
  java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this);
}
;
_.hasPrevious__Z = function java_util_AbstractList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_AbstractList$IteratorImpl_i > 0;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_AbstractList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i > 0);
  return this.java_util_AbstractList$ListIteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = --this.java_util_AbstractList$IteratorImpl_i);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractList/ListIteratorImpl', 97);
function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(135, 289, {48:1}, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0 = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01) , new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_remove__Ljava_lang_Object_2Z(key){
  if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key)) {
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractMap$1_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractMap$1_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractMap$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap/1', 135);
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(94, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return this.java_util_AbstractMap$1$1_val$outerIter2.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this.java_util_AbstractMap$1$1_val$outerIter2);
  return entry.getKey__Ljava_lang_Object_2();
}
;
_.remove__V = function java_util_AbstractMap$1$1_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this.java_util_AbstractMap$1$1_val$outerIter2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap/1/1', 94);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(133, 1, $intern_73);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 31)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 31);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_key, entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_value;
}
;
_.hashCode__I = function java_util_AbstractMap$AbstractEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_key) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_value);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  var oldValue;
  oldValue = this.java_util_AbstractMap$AbstractEntry_value;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
  return oldValue;
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMap$AbstractEntry_toString__Ljava_lang_String_2(){
  return this.java_util_AbstractMap$AbstractEntry_key + '=' + this.java_util_AbstractMap$AbstractEntry_value;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap/AbstractEntry', 133);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(134, 133, $intern_73, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap/SimpleEntry', 134);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(295, 1, $intern_73);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 31)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 31);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_InternalStringMap$2_val$entry2.value[0], entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this), entry.getValue__Ljava_lang_Object_2());
}
;
_.hashCode__I = function java_util_AbstractMapEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_InternalStringMap$2_val$entry2.value[0]) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this));
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMapEntry_toString__Ljava_lang_String_2(){
  return this.java_util_InternalStringMap$2_val$entry2.value[0] + '=' + java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMapEntry', 295);
function java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_17, 1, 0, 5, 1);
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  this$static.java_util_ArrayList_array[this$static.java_util_ArrayList_array.length] = o;
  return true;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  return this$static.java_util_ArrayList_array[index_0];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 < this$static.java_util_ArrayList_array.length; ++index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  var previous;
  previous = (javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, index_0, 1);
  return previous;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(i, this$static.java_util_ArrayList_array.length);
  javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, i, 1);
  return true;
}

function java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static, index_0, o){
  var previous;
  previous = (javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  this$static.java_util_ArrayList_array[index_0] = o;
  return previous;
}

function java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static, out){
  var i, result, size_0;
  size_0 = this$static.java_util_ArrayList_array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(out) != 10 && com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(out), out.java_lang_Object_castableTypeMap, out.__elementTypeId$, com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(out), result) , result));
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this$static.java_util_ArrayList_array[i]);
  }
  out.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, size_0, null);
  return out;
}

function java_util_ArrayList_ArrayList__V(){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
}

function java_util_ArrayList_ArrayList__IV(initialCapacity){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(initialCapacity >= 0, 'Initial capacity must not be negative');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(36, 290, {3:1, 27:1}, java_util_ArrayList_ArrayList__V, java_util_ArrayList_ArrayList__IV);
_.add__ILjava_lang_Object_2V = function java_util_ArrayList_add__ILjava_lang_Object_2V(index_0, o){
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, this.java_util_ArrayList_array.length);
  javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(this.java_util_ArrayList_array, index_0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_ArrayList_get__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.isEmpty__Z = function java_util_ArrayList_isEmpty__Z(){
  return this.java_util_ArrayList_array.length == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_ArrayList_iterator__Ljava_util_Iterator_2(){
  return new java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_ArrayList_remove__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_ArrayList_remove__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.size__I = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_array.length;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'ArrayList', 36);
function java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(this$static){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this$static.java_util_ArrayList$1_i < this$static.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length);
  this$static.java_util_ArrayList$1_last = this$static.java_util_ArrayList$1_i++;
  return this$static.java_util_ArrayList$1_this$01.java_util_ArrayList_array[this$static.java_util_ArrayList$1_last];
}

function java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this$0){
  this.java_util_ArrayList$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(95, 1, {}, java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V);
_.hasNext__Z = function java_util_ArrayList$1_hasNext__Z(){
  return this.java_util_ArrayList$1_i < this.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length;
}
;
_.next__Ljava_lang_Object_2 = function java_util_ArrayList$1_next__Ljava_lang_Object_2(){
  return java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(this);
}
;
_.remove__V = function java_util_ArrayList$1_remove__V(){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(this.java_util_ArrayList$1_last != -1);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_ArrayList$1_this$01, this.java_util_ArrayList$1_i = this.java_util_ArrayList$1_last);
  this.java_util_ArrayList$1_last = -1;
}
;
_.java_util_ArrayList$1_i = 0;
_.java_util_ArrayList$1_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'ArrayList/1', 95);
function java_util_Collections_$clinit__V(){
  java_util_Collections_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_Collections_EMPTY_1LIST = new java_util_Collections$EmptyList_Collections$EmptyList__V;
}

function java_util_Collections_hashCode__Ljava_lang_Iterable_2I(collection){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function java_util_Collections_hashCode__Ljava_util_List_2I(list){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var java_util_Collections_EMPTY_1LIST;
function java_util_Collections$EmptyList_Collections$EmptyList__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(155, 290, {3:1, 27:1}, java_util_Collections$EmptyList_Collections$EmptyList__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptyList_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$EmptyList_get__ILjava_lang_Object_2(location_0){
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(location_0, 0);
  return null;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptyList_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_Collections$EmptyList_listIterator__Ljava_util_ListIterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptyList_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Collections/EmptyList', 155);
function java_util_Collections$EmptyListIterator_$clinit__V(){
  java_util_Collections$EmptyListIterator_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_Collections$EmptyListIterator_INSTANCE = new java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V;
}

function java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(156, 1, {}, java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V);
_.hasNext__Z = function java_util_Collections$EmptyListIterator_hasNext__Z(){
  return false;
}
;
_.hasPrevious__Z = function java_util_Collections$EmptyListIterator_hasPrevious__Z(){
  return false;
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_next__Ljava_lang_Object_2(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
}
;
_.previous__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_previous__Ljava_lang_Object_2(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
}
;
_.remove__V = function java_util_Collections$EmptyListIterator_remove__V(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__V);
}
;
var java_util_Collections$EmptyListIterator_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Collections/EmptyListIterator', 156);
function java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  if (iterator[$intern_72] != host[$intern_72]) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_ConcurrentModificationException_ConcurrentModificationException__V);
  }
}

function java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(map_0){
  var modCount;
  modCount = map_0[$intern_72] | 0;
  map_0[$intern_72] = modCount + 1;
}

function java_util_ConcurrentModificationException_ConcurrentModificationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(202, 15, $intern_33, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'ConcurrentModificationException', 202);
function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2) || value1 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

function java_util_HashMap_HashMap__IV(ignored){
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(ignored >= 0, 'Negative initial capacity');
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(true, 'Non-positive load factor');
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(28, 77, {3:1, 28:1, 58:1}, java_util_HashMap_HashMap__V, java_util_HashMap_HashMap__IV);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'HashMap', 28);
function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  var old;
  old = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o, this$static);
  return old == null;
}

function java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.java_util_HashSet_map, o);
}

function java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o) != null;
}

function java_util_HashSet_HashSet__V(){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__V;
}

function java_util_HashSet_HashSet__IV(initialCapacity){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__IV(initialCapacity);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(50, 289, {3:1, 48:1}, java_util_HashSet_HashSet__V, java_util_HashSet_HashSet__IV);
_.add__Ljava_lang_Object_2Z = function java_util_HashSet_add__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.isEmpty__Z = function java_util_HashSet_isEmpty__Z(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_HashSet_map) == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  var outerIter;
  return outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V((new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map)).java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01) , new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_HashSet_remove__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.size__I = function java_util_HashSet_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_HashSet_map);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'HashSet', 50);
function java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry;
    }
  }
  return null;
}

function java_util_InternalHashCodeMap_$getChainOrEmpty__Ljava_util_InternalHashCodeMap_2I_3Ljava_util_Map$Entry_2(this$static, hashCode){
  var chain;
  chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var hashCode;
  return java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, java_util_InternalHashCodeMap_$getChainOrEmpty__Ljava_util_InternalHashCodeMap_2I_3Ljava_util_Map$Entry_2(this$static, key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0)));
}

function java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0);
  chain0 = (chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.java_util_InternalHashCodeMap_backingMap.set(hashCode0, chain0);
  }
   else {
    entry = java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, chain0);
    if (entry) {
      return entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
    }
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(chain0, chain0.length, new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0));
  ++this$static.java_util_InternalHashCodeMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalHashCodeMap_host);
  return null;
}

function java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0);
  chain0 = (chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.java_util_InternalHashCodeMap_backingMap[$intern_74](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.java_util_InternalHashCodeMap_size;
      java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalHashCodeMap_host);
      return entry.getValue__Ljava_lang_Object_2();
    }
  }
  return null;
}

function java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V(host){
  this.java_util_InternalHashCodeMap_backingMap = java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2();
  this.java_util_InternalHashCodeMap_host = host;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(157, 1, {}, java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_InternalHashCodeMap_iterator__Ljava_util_Iterator_2(){
  return new java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this);
}
;
_.java_util_InternalHashCodeMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalHashCodeMap', 157);
function java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this$0){
  this.java_util_InternalHashCodeMap$1_this$01 = this$0;
  this.java_util_InternalHashCodeMap$1_chains = this.java_util_InternalHashCodeMap$1_this$01.java_util_InternalHashCodeMap_backingMap.entries();
  this.java_util_InternalHashCodeMap$1_chain = [];
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(100, 1, {}, java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_InternalHashCodeMap$1_next__Ljava_lang_Object_2(){
  return this.java_util_InternalHashCodeMap$1_lastEntry = this.java_util_InternalHashCodeMap$1_chain[this.java_util_InternalHashCodeMap$1_itemIndex++] , this.java_util_InternalHashCodeMap$1_lastEntry;
}
;
_.hasNext__Z = function java_util_InternalHashCodeMap$1_hasNext__Z(){
  var current;
  if (this.java_util_InternalHashCodeMap$1_itemIndex < this.java_util_InternalHashCodeMap$1_chain.length) {
    return true;
  }
  current = this.java_util_InternalHashCodeMap$1_chains.next();
  if (!current.done) {
    this.java_util_InternalHashCodeMap$1_chain = current.value[1];
    this.java_util_InternalHashCodeMap$1_itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove__V = function java_util_InternalHashCodeMap$1_remove__V(){
  java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalHashCodeMap$1_this$01, this.java_util_InternalHashCodeMap$1_lastEntry.getKey__Ljava_lang_Object_2());
  this.java_util_InternalHashCodeMap$1_itemIndex != 0 && --this.java_util_InternalHashCodeMap$1_itemIndex;
}
;
_.java_util_InternalHashCodeMap$1_itemIndex = 0;
_.java_util_InternalHashCodeMap$1_lastEntry = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalHashCodeMap/1', 100);
function java_util_InternalJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_InternalJsMapFactory_jsMapCtor = java_util_InternalJsMapFactory_getJsMapConstructor__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

function java_util_InternalJsMapFactory_canHandleObjectCreateAndProto__Z(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function java_util_InternalJsMapFactory_getJsMapConstructor__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === $intern_1 && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return java_util_InternalJsMapFactory_getJsMapPolyFill__Lcom_google_gwt_core_client_JavaScriptObject_2();
  }
}

function java_util_InternalJsMapFactory_getJsMapPolyFill__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype[$intern_74] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!java_util_InternalJsMapFactory_canHandleObjectCreateAndProto__Z()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype[$intern_74] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2(){
  java_util_InternalJsMapFactory_$clinit__V();
  return new java_util_InternalJsMapFactory_jsMapCtor;
}

var java_util_InternalJsMapFactory_jsMapCtor;
function java_util_InternalStringMap_$contains__Ljava_util_InternalStringMap_2Ljava_lang_String_2Z(this$static, key){
  return !(this$static.java_util_InternalStringMap_backingMap.get(key) === undefined);
}

function java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.java_util_InternalStringMap_backingMap.get(key);
}

function java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.java_util_InternalStringMap_backingMap.get(key);
  this$static.java_util_InternalStringMap_backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.java_util_InternalStringMap_size;
    java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalStringMap_host);
  }
   else {
    ++this$static.java_util_InternalStringMap_valueMod;
  }
  return oldValue;
}

function java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var value_0;
  value_0 = this$static.java_util_InternalStringMap_backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.java_util_InternalStringMap_valueMod;
  }
   else {
    this$static.java_util_InternalStringMap_backingMap[$intern_74](key);
    --this$static.java_util_InternalStringMap_size;
    java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalStringMap_host);
  }
  return value_0;
}

function java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V(host){
  this.java_util_InternalStringMap_backingMap = java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2();
  this.java_util_InternalStringMap_host = host;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(158, 1, {}, java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_InternalStringMap_iterator__Ljava_util_Iterator_2(){
  return new java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this);
}
;
_.java_util_InternalStringMap_size = 0;
_.java_util_InternalStringMap_valueMod = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalStringMap', 158);
function java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this$0){
  this.java_util_InternalStringMap$1_this$01 = this$0;
  this.java_util_InternalStringMap$1_entries = this.java_util_InternalStringMap$1_this$01.java_util_InternalStringMap_backingMap.entries();
  this.java_util_InternalStringMap$1_current = this.java_util_InternalStringMap$1_entries.next();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(101, 1, {}, java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_InternalStringMap$1_next__Ljava_lang_Object_2(){
  return this.java_util_InternalStringMap$1_last = this.java_util_InternalStringMap$1_current , this.java_util_InternalStringMap$1_current = this.java_util_InternalStringMap$1_entries.next() , new java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V(this.java_util_InternalStringMap$1_this$01, this.java_util_InternalStringMap$1_last, this.java_util_InternalStringMap$1_this$01.java_util_InternalStringMap_valueMod);
}
;
_.hasNext__Z = function java_util_InternalStringMap$1_hasNext__Z(){
  return !this.java_util_InternalStringMap$1_current.done;
}
;
_.remove__V = function java_util_InternalStringMap$1_remove__V(){
  java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalStringMap$1_this$01, this.java_util_InternalStringMap$1_last.value[0]);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalStringMap/1', 101);
function java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this$static){
  if (this$static.java_util_InternalStringMap$2_this$01.java_util_InternalStringMap_valueMod != this$static.java_util_InternalStringMap$2_val$lastValueMod3) {
    return java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_InternalStringMap$2_this$01, this$static.java_util_InternalStringMap$2_val$entry2.value[0]);
  }
  return this$static.java_util_InternalStringMap$2_val$entry2.value[1];
}

function java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V(this$0, val$entry, val$lastValueMod){
  this.java_util_InternalStringMap$2_this$01 = this$0;
  this.java_util_InternalStringMap$2_val$entry2 = val$entry;
  this.java_util_InternalStringMap$2_val$lastValueMod3 = val$lastValueMod;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(159, 295, $intern_73, java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V);
_.getKey__Ljava_lang_Object_2 = function java_util_InternalStringMap$2_getKey__Ljava_lang_Object_2(){
  return this.java_util_InternalStringMap$2_val$entry2.value[0];
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_InternalStringMap$2_getValue__Ljava_lang_Object_2(){
  return java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalStringMap$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalStringMap$2_this$01, this.java_util_InternalStringMap$2_val$entry2.value[0], object);
}
;
_.java_util_InternalStringMap$2_val$lastValueMod3 = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalStringMap/2', 159);
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(42, 15, $intern_33, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'NoSuchElementException', 42);
function java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) || a != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Objects_hashCode__Ljava_lang_Object_2I(o){
  return o != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(o):0;
}

function java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(this$static, newElement){
  !this$static.java_util_StringJoiner_builder?(this$static.java_util_StringJoiner_builder = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(this$static.java_util_StringJoiner_prefix)):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.java_util_StringJoiner_builder, this$static.java_util_StringJoiner_delimiter);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2Ljava_lang_StringBuilder_2(this$static.java_util_StringJoiner_builder, newElement);
  return this$static;
}

function java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V(prefix, suffix){
  this.java_util_StringJoiner_delimiter = ', ';
  this.java_util_StringJoiner_prefix = prefix;
  this.java_util_StringJoiner_suffix = suffix;
  this.java_util_StringJoiner_emptyValue = this.java_util_StringJoiner_prefix + ('' + this.java_util_StringJoiner_suffix);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(92, 1, {}, java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V);
_.toString__Ljava_lang_String_2 = function java_util_StringJoiner_toString__Ljava_lang_String_2(){
  return !this.java_util_StringJoiner_builder?this.java_util_StringJoiner_emptyValue:this.java_util_StringJoiner_suffix.length == 0?this.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:this.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + this.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1StringJoiner_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'StringJoiner', 92);
function java_util_logging_Level_$clinit__V(){
  java_util_logging_Level_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_logging_Level_FINE = new java_util_logging_Level$LevelFine_Level$LevelFine__V;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(291, 1, $intern_17);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level_getName__Ljava_lang_String_2(){
  return 'DUMMY';
}
;
_.toString__Ljava_lang_String_2 = function java_util_logging_Level_toString__Ljava_lang_String_2(){
  return this.getName__Ljava_lang_String_2();
}
;
var java_util_logging_Level_FINE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'Level', 291);
function java_util_logging_Level$LevelFine_Level$LevelFine__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(139, 291, $intern_17, java_util_logging_Level$LevelFine_Level$LevelFine__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelFine_getName__Ljava_lang_String_2(){
  return 'FINE';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelFine_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'Level/LevelFine', 139);
function java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V(){
  return;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(39, 1, {}, java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Logger_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'Logger', 39);
function javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(expression, errorMessage){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(errorMessage));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalArrayType__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ArrayStoreException_ArrayStoreException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  if (reference == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  return reference;
}

function javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(reference){
  if (!reference) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot suppress a null exception.'));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalState__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalState__ZLjava_lang_Object_2V(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Can't overwrite cause"));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalType__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ClassCastException_ClassCastException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference);
  return reference;
}

function javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(o){
  return o.$H || (o.$H = ++javaemul_internal_ObjectHashing_nextHashId);
}

var javaemul_internal_ObjectHashing_nextHashId = 0;
function javaemul_internal_StringHashCache_$clinit__V(){
  javaemul_internal_StringHashCache_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  javaemul_internal_StringHashCache_back = {};
  javaemul_internal_StringHashCache_front = {};
}

function javaemul_internal_StringHashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + java_lang_String_$charAt__Ljava_lang_String_2IC(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(str){
  javaemul_internal_StringHashCache_$clinit__V();
  var hashCode, key, result;
  key = ':' + str;
  result = javaemul_internal_StringHashCache_front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = javaemul_internal_StringHashCache_back[key];
  hashCode = result === undefined?javaemul_internal_StringHashCache_compute__Ljava_lang_String_2I(str):result;
  javaemul_internal_StringHashCache_increment__V();
  javaemul_internal_StringHashCache_front[key] = hashCode;
  return hashCode;
}

function javaemul_internal_StringHashCache_increment__V(){
  if (javaemul_internal_StringHashCache_count == 256) {
    javaemul_internal_StringHashCache_back = javaemul_internal_StringHashCache_front;
    javaemul_internal_StringHashCache_front = {};
    javaemul_internal_StringHashCache_count = 0;
  }
  ++javaemul_internal_StringHashCache_count;
}

var javaemul_internal_StringHashCache_back, javaemul_internal_StringHashCache_count = 0, javaemul_internal_StringHashCache_front;
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Integer_2(value_0){
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_round_1int__DI(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toDouble__Lcom_google_gwt_json_client_JSONValue_2D(value_0)));
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Integer_2(value_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Integer_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return !value_0?(org_fusesource_restygwt_client_Defaults_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance):new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(value_0.java_lang_Integer_value);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Integer_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 21));
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_AbstractJsonEncoderDecoder$5__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(210, 301, {}, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_AbstractJsonEncoderDecoder$5__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0);
}
;
_.encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractJsonEncoderDecoder$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AbstractJsonEncoderDecoder/5', 210);
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Float_2(value_0){
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  return new java_lang_Float_Float__FV(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toDouble__Lcom_google_gwt_json_client_JSONValue_2D(value_0));
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Float_2(value_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Ljava_lang_Float_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return !value_0?(org_fusesource_restygwt_client_Defaults_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance):new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(value_0.java_lang_Float_value);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Ljava_lang_Float_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 35));
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_AbstractJsonEncoderDecoder$7__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(211, 301, {}, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_AbstractJsonEncoderDecoder$7__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0);
}
;
_.encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractJsonEncoderDecoder$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AbstractJsonEncoderDecoder/7', 211);
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_String_2(value_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_String_2(value_0){
  var str;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  str = value_0.isString__Lcom_google_gwt_json_client_JSONString_2();
  if (!str) {
    if (!!value_0.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2() || !!value_0.isNumber__Lcom_google_gwt_json_client_JSONNumber_2()) {
      return value_0.toString__Ljava_lang_String_2();
    }
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json string, but was given: ' + value_0));
  }
  return str.com_google_gwt_json_client_JSONString_value;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return value_0 == null?(org_fusesource_restygwt_client_Defaults_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance):new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(value_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_AbstractJsonEncoderDecoder$9__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(212, 301, {}, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_AbstractJsonEncoderDecoder$9__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0);
}
;
_.encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_encode__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractJsonEncoderDecoder$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AbstractJsonEncoderDecoder/9', 212);
function org_fusesource_restygwt_client_Defaults_$clinit__V(){
  var com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0, com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0;
  org_fusesource_restygwt_client_Defaults_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_Defaults_serviceRoot = (com_google_gwt_core_client_impl_Impl_$clinit__V() , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0 = '__gwtDevModeHook:' + $moduleName + ':moduleBase' , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0 = $wnd || self , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0[com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0] || $moduleBase);
}

function org_fusesource_restygwt_client_Defaults_setServiceRoot__Ljava_lang_String_2V(serviceRoot){
  org_fusesource_restygwt_client_Defaults_$clinit__V();
  var suffixlength;
  suffixlength = '/'.length;
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(serviceRoot.substr(serviceRoot.length - suffixlength, suffixlength), '/') || (serviceRoot += '/');
  org_fusesource_restygwt_client_Defaults_serviceRoot = serviceRoot;
}

var org_fusesource_restygwt_client_Defaults_addXHttpMethodOverrideHeader = true, org_fusesource_restygwt_client_Defaults_serviceRoot;
function org_fusesource_restygwt_client_FailedStatusCodeException_FailedStatusCodeException__Ljava_lang_String_2IV(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(218, 15, $intern_33);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1FailedStatusCodeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'FailedStatusCodeException', 218);
function org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V(response){
  var lastArg;
  org_fusesource_restygwt_client_FailedStatusCodeException_FailedStatusCodeException__Ljava_lang_String_2IV.call(this, (lastArg = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.statusText , response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.status , lastArg));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(219, 218, $intern_33, org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1FailedResponseException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'FailedResponseException', 219);
function org_fusesource_restygwt_client_FileSystemHelper_isRequestGoingToFileSystem__Ljava_lang_String_2Ljava_lang_String_2Z(baseUrl, requestUrl){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 4), 'file')) {
    return true;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(baseUrl.substr(0, 4), 'file') && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 1), '/')) {
    return true;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(baseUrl.substr(0, 4), 'file') && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 1), '.')) {
    return true;
  }
  return false;
}

function org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V(msg){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, msg);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(66, 15, $intern_33, org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1JsonEncoderDecoder$DecodingException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'JsonEncoderDecoder/DecodingException', 66);
function org_fusesource_restygwt_client_Method_$headers__Lorg_fusesource_restygwt_client_Method_2Ljava_util_Map_2Lorg_fusesource_restygwt_client_Method_2(this$static, headers){
  var entry, entry$iterator;
  if (headers) {
    for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(headers)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
      entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
      com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.org_fusesource_restygwt_client_Method_builder, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(entry.getKey__Ljava_lang_Object_2()), com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(entry.getValue__Ljava_lang_Object_2()));
    }
  }
  return this$static;
}

function org_fusesource_restygwt_client_Method_$isExpected__Lorg_fusesource_restygwt_client_Method_2IZ(this$static, status_0){
  var baseUrl, requestUrl;
  baseUrl = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2();
  requestUrl = this$static.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_url;
  return org_fusesource_restygwt_client_FileSystemHelper_isRequestGoingToFileSystem__Ljava_lang_String_2Ljava_lang_String_2Z(baseUrl, requestUrl) || this$static.org_fusesource_restygwt_client_Method_anyStatus || java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(status_0));
}

function org_fusesource_restygwt_client_Method_$json__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_Method_2(this$static, data_0){
  com_google_gwt_http_client_RequestBuilder_$getHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2(this$static.org_fusesource_restygwt_client_Method_builder) == null && (com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.org_fusesource_restygwt_client_Method_builder, $intern_48, $intern_4) , this$static);
  com_google_gwt_http_client_RequestBuilder_$setRequestData__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2V(this$static.org_fusesource_restygwt_client_Method_builder, data_0.toString__Ljava_lang_String_2());
  return this$static;
}

function org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(this$static, callback){
  this$static.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_timeoutMillis == 0 && (org_fusesource_restygwt_client_Defaults_$clinit__V() , false) && com_google_gwt_http_client_RequestBuilder_$setTimeoutMillis__Lcom_google_gwt_http_client_RequestBuilder_2IV(this$static.org_fusesource_restygwt_client_Method_builder, (org_fusesource_restygwt_client_Defaults_$clinit__V() , -1));
  com_google_gwt_http_client_RequestBuilder_$setCallback__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static.org_fusesource_restygwt_client_Method_builder, callback);
  org_fusesource_restygwt_client_Defaults_$clinit__V();
  return org_fusesource_restygwt_client_dispatcher_DefaultDispatcher_$send__Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_Request_2(this$static.org_fusesource_restygwt_client_Method_builder);
}

function org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V(resource, method){
  this.org_fusesource_restygwt_client_Method_expectedStatuses = new java_util_HashSet_HashSet__V;
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(200));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(201));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(204));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(1223));
  new java_util_HashMap_HashMap__V;
  this.org_fusesource_restygwt_client_Method_builder = new org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V(method, org_fusesource_restygwt_client_Resource_$getUri__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2(resource));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(105, 1, {}, org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V);
_.org_fusesource_restygwt_client_Method_anyStatus = false;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Method_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Method', 105);
function org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V(method, url_0){
  com_google_gwt_http_client_RequestBuilder_$clinit__V();
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('httpMethod', method);
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('url', url_0);
  this.com_google_gwt_http_client_RequestBuilder_httpMethod = method;
  this.com_google_gwt_http_client_RequestBuilder_url = url_0;
  this.com_google_gwt_http_client_RequestBuilder_requestData = null;
  org_fusesource_restygwt_client_Defaults_$clinit__V();
  org_fusesource_restygwt_client_Defaults_addXHttpMethodOverrideHeader && com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this, 'X-HTTP-Method-Override', method);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(208, 207, {}, org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Method$MethodRequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Method/MethodRequestBuilder', 208);
function org_fusesource_restygwt_client_Resource_$get__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(this$static){
  return org_fusesource_restygwt_client_Method_$headers__Lorg_fusesource_restygwt_client_Method_2Ljava_util_Map_2Lorg_fusesource_restygwt_client_Method_2(new org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V(this$static, 'GET'), this$static.org_fusesource_restygwt_client_Resource_headers);
}

function org_fusesource_restygwt_client_Resource_$getUri__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2(this$static){
  if (this$static.org_fusesource_restygwt_client_Resource_query != null) {
    return this$static.org_fusesource_restygwt_client_Resource_path + '?' + this$static.org_fusesource_restygwt_client_Resource_query;
  }
  return this$static.org_fusesource_restygwt_client_Resource_path;
}

function org_fusesource_restygwt_client_Resource_$post__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(this$static){
  return org_fusesource_restygwt_client_Method_$headers__Lorg_fusesource_restygwt_client_Method_2Ljava_util_Map_2Lorg_fusesource_restygwt_client_Method_2(new org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V(this$static, 'POST'), this$static.org_fusesource_restygwt_client_Resource_headers);
}

function org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(this$static, path){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 5), 'http:') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 6), 'https:') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 5), 'file:')) {
    return new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(path, this$static.org_fusesource_restygwt_client_Resource_query, this$static.org_fusesource_restygwt_client_Resource_headers);
  }
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 1), '/') && (path = path.substr(1));
  return new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(this$static.org_fusesource_restygwt_client_Resource_path + '/' + path, this$static.org_fusesource_restygwt_client_Resource_query, this$static.org_fusesource_restygwt_client_Resource_headers);
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V(uri_0){
  org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_util_Map_2V.call(this, uri_0);
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(uri_0, query, headers){
  var suffixlength;
  this.org_fusesource_restygwt_client_Resource_path = (suffixlength = '/'.length , java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(uri_0, 0, uri_0.length - 1):uri_0);
  this.org_fusesource_restygwt_client_Resource_query = query;
  this.org_fusesource_restygwt_client_Resource_headers = headers?headers:null;
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_util_Map_2V(uri_0){
  var pos, suffixlength;
  pos = java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(uri_0, String.fromCharCode(63));
  if (pos >= 0) {
    this.org_fusesource_restygwt_client_Resource_path = uri_0.substr(0, pos);
    this.org_fusesource_restygwt_client_Resource_query = uri_0.substr(pos + 1);
  }
   else {
    this.org_fusesource_restygwt_client_Resource_path = (suffixlength = '/'.length , java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(uri_0, 0, uri_0.length - 1):uri_0);
    this.org_fusesource_restygwt_client_Resource_query = null;
  }
  this.org_fusesource_restygwt_client_Resource_headers = null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(63, 1, {}, org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V, org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Resource_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Resource', 63);
function org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(e){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, 'Response was NOT a valid JSON document', e);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(67, 15, $intern_33, org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1ResponseFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'ResponseFormatException', 67);
function org_fusesource_restygwt_client_dispatcher_DefaultDispatcher_$send__Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_Request_2(builder){
  var content;
  if (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z()) {
    java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1dispatcher_1DefaultDispatcher_12_1classLit);
    new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V;
    content = builder.com_google_gwt_http_client_RequestBuilder_requestData;
  }
  return com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', builder.com_google_gwt_http_client_RequestBuilder_callback) , com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(builder, builder.com_google_gwt_http_client_RequestBuilder_requestData, builder.com_google_gwt_http_client_RequestBuilder_callback);
}

var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1dispatcher_1DefaultDispatcher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('org.fusesource.restygwt.client.dispatcher', 'DefaultDispatcher', null);
var $entry = (com_google_gwt_core_client_impl_Impl_$clinit__V() , com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2);
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_com_100046exampleproject_100046gwt_100046init_100046Init_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=frontend-0.js

