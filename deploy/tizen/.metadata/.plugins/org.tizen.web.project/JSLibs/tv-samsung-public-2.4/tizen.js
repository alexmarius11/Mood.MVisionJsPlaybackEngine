/**
 * The AlarmRelative interface provides the relative alarm, which occurs at a fixed interval in future.
          <p>
This alarm triggers after a duration mentioned in the <em>delay</em> attribute from the moment the alarm is added.
If a <em>period</em> is provided, the alarm keeps triggering for the given interval.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmRelative}
 */
function AlarmRelative() {};
AlarmRelative.prototype = new Alarm();

/**
 * The AlarmAbsolute interface provides an absolute alarm, which triggers at a specified absolute date.
          <p>
If a <em>period</em> is provided, the alarm keeps triggering for the given interval. If the <em>daysOfTheWeek</em> array is not empty, the alarm triggers every week, for the given days, at the time defined by the <em>date</em> attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmAbsolute}
 */
function AlarmAbsolute() {};
AlarmAbsolute.prototype = new Alarm();

/**
 * The Alarm interface is an abstract interface for alarm types.
 *
 * @super Object
 * @constructor
 * @return {Alarm}
 */
function Alarm() {};
Alarm.prototype = new Object();

/**
 * The AlarmManager interface provides methods to manage alarms.
 *
 * @super Object
 * @constructor
 * @return {AlarmManager}
 */
function AlarmManager() {};
AlarmManager.prototype = new Object();

/**
 * The AlarmManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the Alarm API.
 *
 * @super Object
 * @constructor
 * @return {AlarmManagerObject}
 */
function AlarmManagerObject() {};
AlarmManagerObject.prototype = new Object();

/**
 * An attribute to store the difference in time (in seconds) between when an alarm is added and when it is triggered.
 *
 * @type Number
 */
AlarmRelative.prototype.delay = new Number();

/**
 * An attribute to store the duration in seconds between each trigger of an alarm. By default, this attribute is set to , indicating that this alarm does not repeat.
 *
 * @type Number
 */
AlarmRelative.prototype.period = new Number();

/**
 * Returns the duration in seconds before the next alarm is triggered.
            <p>
If the alarm has expired, this method returns <var>null</var>.
            </p>
           
 *
 * @type Number
 * @memberOf AlarmRelative
 * @returns {Number}
 */
AlarmRelative.prototype.getRemainingSeconds = function(){ var ret = new Number(); return ret; };

/**
 * An attribute to store the absolute date/time when the alarm is initially triggered.
 * <p>
This attribute is precise to the second. Milliseconds will be ignored.
            </p>
 *
 * @type Date
 */
AlarmAbsolute.prototype.date = new Date();

/**
 * An attribute to store the duration in seconds between each trigger of the alarm.
 * <p>
By default, this attribute is set to <var>null</var>, indicating that this alarm does not repeat.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type Number
 */
AlarmAbsolute.prototype.period = new Number();

/**
 * An attribute to store the days of the week associated with the recurrence rule.
 * <p>
By default, this attribute is set to an empty array.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type array
 */
AlarmAbsolute.prototype.daysOfTheWeek = new array();

/**
 * Returns the date / time of the next alarm trigger.
            <p>
If the alarm has expired, this method returns <var>null</var>. The returned date is precise to the second.
            </p>
           
 *
 * @type Date
 * @memberOf AlarmAbsolute
 * @returns {Date}
 */
AlarmAbsolute.prototype.getNextScheduledDate = function(){ var ret = new Date(); return ret; };

/**
 * The alarm identifier.
 *
 * @type AlarmId
 */
Alarm.prototype.id = new AlarmId();

/**
 * The period of a minute. It defines the number of seconds per minute.
 *
 * @type Number
 */
AlarmManager.PERIOD_MINUTE = new Number();

/**
 * The period of an hour. It defines the number of seconds per hour.
 *
 * @type Number
 */
AlarmManager.PERIOD_HOUR = new Number();

/**
 * The period of a day. It defines the number of seconds per day.
 *
 * @type Number
 */
AlarmManager.PERIOD_DAY = new Number();

/**
 * The period of a week. It defines the number of seconds in a week.
 *
 * @type Number
 */
AlarmManager.PERIOD_WEEK = new Number();

/**
 * Adds an alarm to the storage.
            <p>
Sets an alarm with the application ID to be run. You should definitely provide the application ID to run
and the <a href=" http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/app_guide/application_service.htm">application control </a>information if it is necessary.
For more information about the application control, see <a href="application.html">The Application API</a>.
            </p>
           
 *
 * @param {Alarm} alarm
 * @param {ApplicationId} applicationId
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.add = function(alarm, applicationId, appControl){ return; };

/**
 * Removes an alarm from the storage.
            <p>
If an alarm goes off, it will be removed from the storage automatically.
            </p>
           
 *
 * @param {AlarmId} id
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.remove = function(id){ return; };

/**
 * Removes all alarms added by an application.
            <p>
Because each application has its own alarm storage, this method removes alarms only added by the calling application.
            </p>
           
 *
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.removeAll = function(){ return; };

/**
 * Returns an alarm as per the specified identifier.
 *
 * @param {AlarmId} id
 * @type Alarm
 * @memberOf AlarmManager
 * @returns {Alarm}
 */
AlarmManager.prototype.get = function(id){ var ret = new Alarm(); return ret; };

/**
 * Retrieves all alarms in an application storage.
            <p>
Alarms that have already been triggered are removed automatically from the storage.
            </p>
           
 *
 * @type array
 * @memberOf AlarmManager
 * @returns {array}
 */
AlarmManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * The Alarm API provides functionality for scheduling the system alarm. It allows you to run other applications and have them perform operations at a specific time. You can schedule an alarm to go off once or to repeat at specific intervals.
 * <p>
Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
        </p>
 * <p>
Once an alarm goes off, it will be removed from the alarm storage automatically.
<em>AlarmManager</em> provides methods to manage alarms such as adding and removing.
For more information on the Alarm features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
AlarmManagerObject.prototype.alarm = new AlarmManager();

/**
 * The Alarm API provides functionality for scheduling the system alarm. It allows you to run other applications and have them perform operations at a specific time. You can schedule an alarm to go off once or to repeat at specific intervals.
 * <p>
Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
        </p>
 * <p>
Once an alarm goes off, it will be removed from the alarm storage automatically.
<em>AlarmManager</em> provides methods to manage alarms such as adding and removing.
For more information on the Alarm features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
Tizen.prototype.alarm = new AlarmManager();

/**
 * This interface defines the current application's information and the basic operations (such as exit or hide) for the current application.
 *
 * @super Object
 * @constructor
 * @return {Application}
 */
function Application() {};
Application.prototype = new Object();

/**
 * This interface defines the certificate information of an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationCertificate}
 */
function ApplicationCertificate() {};
ApplicationCertificate.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the system has finished searching applications that match a specific application control .
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects and application control as an input parameter.
It is used in <em>ApplicationManager.findAppControl()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FindAppControlSuccessCallback}
 */
function FindAppControlSuccessCallback() {};
FindAppControlSuccessCallback.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the installed application list is retrieved.
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationArraySuccessCallback}
 */
function ApplicationInformationArraySuccessCallback() {};
ApplicationInformationArraySuccessCallback.prototype = new Object();

/**
 * The ApplicationControlDataArrayReplyCallback callback specifies success callbacks that are invoked as a reply from the requested application control within the application control requester.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 <em>onsuccess()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyResult()</em>.            </li>
            <li>
 <em>onfailure()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyFailure()</em>.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlDataArrayReplyCallback}
 */
function ApplicationControlDataArrayReplyCallback() {};
ApplicationControlDataArrayReplyCallback.prototype = new Object();

/**
 * This interface defines a key/value pair used to pass data between applications through the interface.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlData}
 */
function ApplicationControlData() {};
ApplicationControlData.prototype = new Object();

/**
 * This interface defines the general information available to an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformation}
 */
function ApplicationInformation() {};
ApplicationInformation.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the list of running applications is retrieved.
          <p>
This callback interface specifies a success method with
an array of <em>ApplicationContext </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsContext()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationContextArraySuccessCallback}
 */
function ApplicationContextArraySuccessCallback() {};
ApplicationContextArraySuccessCallback.prototype = new Object();

/**
 * This interface defines the information available about a running application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationContext}
 */
function ApplicationContext() {};
ApplicationContext.prototype = new Object();

/**
 * This interface defines what is instantiated by the object on the Tizen Platform.
          <p>
The <em>tizen.application </em>object allows access to the Application API's functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationManagerObject}
 */
function ApplicationManagerObject() {};
ApplicationManagerObject.prototype = new Object();

/**
 * The ApplicationManager interface provides methods to retrieve application information, launch, install application, etc.
 *
 * @super Object
 * @constructor
 * @return {ApplicationManager}
 */
function ApplicationManager() {};
ApplicationManager.prototype = new Object();

/**
 * This interface consists of an operation, URI, MIME type, and data. It describes an action to be performed by other applications and is passed to launch other applications. If the system gets the application control request, it finds the corresponding application to be launched with the delivered application control and launches the selected application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControl}
 */
function ApplicationControl() {};
ApplicationControl.prototype = new Object();

/**
 * The ApplicationInformationEventCallback specifies listener for subscribing for notifications of changes in the list of installed applications on a device.
          <p>
This callback interface specifies methods that are invoked when
an application is installed, updated, or uninstalled.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationEventCallback}
 */
function ApplicationInformationEventCallback() {};
ApplicationInformationEventCallback.prototype = new Object();

/**
 * This interface defines the meta data of an installed application
 *
 * @super Object
 * @constructor
 * @return {ApplicationMetaData}
 */
function ApplicationMetaData() {};
ApplicationMetaData.prototype = new Object();

/**
 * This interface has an application control information requested and passed from another application and is passed to launch other applications. The newly launched application can get the requested application control through the method, and send the results to the calling application through the method after performing the required action requested by the calling application.
 *
 * @super Object
 * @constructor
 * @return {RequestedApplicationControl}
 */
function RequestedApplicationControl() {};
RequestedApplicationControl.prototype = new Object();

/**
 * An attribute to store the application information for the current application.
 *
 * @type ApplicationInformation
 */
Application.prototype.appInfo = new ApplicationInformation();

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
Application.prototype.contextId = new ApplicationContextId();

/**
 * Exits the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.exit = function(){ return; };

/**
 * Hides the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.hide = function(){ return; };

/**
 * Gets the requested application control passed to the current application.
            <p>
Gets the requested application control that contains the application control
passed by the <em>launchAppControl()</em> method from the calling application.
The requested application control contains the reason the application
is launched and what it has to perform. For example, an application
might be launched to display an image on a page by another
application's request. In all of these cases, the application is
responsible for checking the contents of the application control and responding
appropriately when it is launched.
            </p>
           
 *
 * @type RequestedApplicationControl
 * @memberOf Application
 * @returns {RequestedApplicationControl}
 */
Application.prototype.getRequestedAppControl = function(){ var ret = new RequestedApplicationControl(); return ret; };

/**
 * An attribute to store the type of the application certificate
 *
 * @type String
 */
ApplicationCertificate.prototype.type = new String();

/**
 * An attribute to store the value of the application certificate
 *
 * @type String
 */
ApplicationCertificate.prototype.value = new String();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf FindAppControlSuccessCallback
 * @returns {void}
 */
FindAppControlSuccessCallback.prototype.onsuccess = function(informationArray, appControl){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf ApplicationInformationArraySuccessCallback
 * @returns {void}
 */
ApplicationInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * Called when the callee application calls .
 *
 * @param {array} data
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the callee application calls .
 *
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onfailure = function(){ return; };

/**
 * An attribute to store the name of a key.
 *
 * @type String
 */
ApplicationControlData.prototype.key = new String();

/**
 * An attribute to store the value associated with a key.
 *
 * @type array
 */
ApplicationControlData.prototype.value = new array();

/**
 * An attribute to store the identifier of an application for application management.
 *
 * @type ApplicationId
 */
ApplicationInformation.prototype.id = new ApplicationId();

/**
 * An attribute to store the name of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.iconPath = new String();

/**
 * An attribute to store the version of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.version = new String();

/**
 * An attribute that determines whether the application information should be shown (such as in menus).
 *
 * @type Boolean
 */
ApplicationInformation.prototype.show = new Boolean();

/**
 * An array of attributes to store the categories that the app belongs to.
 *
 * @type array
 */
ApplicationInformation.prototype.categories = new array();

/**
 * An attribute to store the application install/update time.
 *
 * @type Date
 */
ApplicationInformation.prototype.installDate = new Date();

/**
 * An attribute to store the application size (installed space).
 *
 * @type Number
 */
ApplicationInformation.prototype.size = new Number();

/**
 * An attribute to store the package ID of an application.
 *
 * @type PackageId
 */
ApplicationInformation.prototype.packageId = new PackageId();

/**
 * Called when completes successfully.
 *
 * @param {array} contexts
 * @type void
 * @memberOf ApplicationContextArraySuccessCallback
 * @returns {void}
 */
ApplicationContextArraySuccessCallback.prototype.onsuccess = function(contexts){ return; };

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
ApplicationContext.prototype.id = new ApplicationContextId();

/**
 * An attribute to store the ID of an installed application.
 *
 * @type ApplicationId
 */
ApplicationContext.prototype.appId = new ApplicationId();

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for the current application such as exit or hide.
        </p>
 * <p>
For more information on the Application features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
ApplicationManagerObject.prototype.application = new ApplicationManager();

/**
 * Gets the object defining the current application.
 *
 * @type Application
 * @memberOf ApplicationManager
 * @returns {Application}
 */
ApplicationManager.prototype.getCurrentApplication = function(){ var ret = new Application(); return ret; };

/**
 * Kills an application with the specified application context ID.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the context is not found with the specified context ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value
or if the specified context ID matches the context ID of the calling application.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextId} contextId
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.kill = function(contextId, successCallback, errorCallback){ return; };

/**
 * Launches an application with the given application ID.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the application is not found with the specified ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launch = function(id, successCallback, errorCallback){ return; };

/**
 * Launches an application with the specified application control.
            <p>
An application can launch other applications with the application control,
and get back the results from the launched applications.
            </p>
            <p>
The application control consists of an operation, URI, and MIME type, and describes
the request to be performed by the newly launched application. The
application control is passed to the <em>launchAppControl()</em> method to launch an
application. The system tries to find the proper application
to perform the requested application control, then launches the selected application.
            </p>
            <p>
The application control request is passed to the newly launched application
and it can be accessed by the <em>getRequestedAppControl() </em>method. The passed
application control contains the reason the application has been launched and
information about what the application is doing. The launched application
can send a result to the caller application with the <em>replyResult() </em>method of the
<em>RequestedApplicationControl</em> interface.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the system cannot find the application that matches the specified application control.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
SecurityError - If the application does not have the privilege to call the specified application control operation.              </li>
              <li>
UnknownError: If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ApplicationControlDataArrayReplyCallback} replyCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launchAppControl = function(appControl, id, successCallback, errorCallback, replyCallback){ return; };

/**
 * Finds which applications can be launched with the given application control.
            <p>
An application can get a list of other applications that can be launched with the application control.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {FindAppControlSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.findAppControl = function(appControl, successCallback, errorCallback){ return; };

/**
 * Gets a list of application contexts for applications that are currently running on a device. The information contained for each application corresponds to the application state at the time when the list had been generated.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsContext = function(successCallback, errorCallback){ return; };

/**
 * Gets the application context for the specified application context ID. If the ID is set to or is not set at all, the method returns the application context of the current application. The list of running applications and their application IDs is obtained with .
 *
 * @param {ApplicationContextId} contextId
 * @type ApplicationContext
 * @memberOf ApplicationManager
 * @returns {ApplicationContext}
 */
ApplicationManager.prototype.getAppContext = function(contextId){ var ret = new ApplicationContext(); return ret; };

/**
 * Gets the list of installed applications' information on a device. The information contained on each application corresponds to the application state at the time when the list had been generated.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets application information for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application information for the current application.
The list of installed applications and their application IDs is obtained with <em>getAppsInfo()</em>.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type ApplicationInformation
 * @memberOf ApplicationManager
 * @returns {ApplicationInformation}
 */
ApplicationManager.prototype.getAppInfo = function(id){ var ret = new ApplicationInformation(); return ret; };

/**
 * Gets application certificates for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application certificates for the current application.
            </p>
            <p>
The certificate types are listed below:
            </p>
            <ul>
              <li>
 AUTHOR_ROOT - Author Root Certificate               </li>
              <li>
 AUTHOR_INTERMEDIATE - Author Intermediate Certificate               </li>
              <li>
 AUTHOR_SIGNER - Author Signer Certificate               </li>
              <li>
 DISTRIBUTOR_ROOT - Distributor Root Certificate               </li>
              <li>
 DISTRIBUTOR_INTERMEDIATE - Distributor Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR_SIGNER - Distributor Signer Certificate               </li>
              <li>
 DISTRIBUTOR2_ROOT - Distributor2 Root Certificate               </li>
              <li>
 DISTRIBUTOR2_INTERMEDIATE - Distributor2 Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR2_SIGNER - Distributor2 Signer Certificate               </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppCerts = function(id){ var ret = new array(); return ret; };

/**
 * Gets the URI of the read-only shared directory of an application for a specified application ID.
            <p>
The shared directory is used to export data to other applications.
If the ID is set to <var>null</var> or not set at all, it returns the shared directory URI for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type String
 * @memberOf ApplicationManager
 * @returns {String}
 */
ApplicationManager.prototype.getAppSharedURI = function(id){ var ret = new String(); return ret; };

/**
 * Gets the application meta data array for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns the application meta data array for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppMetaData = function(id){ var ret = new array(); return ret; };

/**
 * Adds a listener for receiving any notification for changes in the list of installed applications on a device.
            <p>
It installs a callback that is triggered every time a change occurs on
the list of installed applications on a device. This change may
occur due to a new installation, uninstallation, or update of an application.
            </p>
            <p>
When executed, the implementation must immediately return a listener
ID that identifies the listener. After returning the ID, the change
detection operation is started asynchronously.
            </p>
            <p>
The <em>ApplicationInformationEventCallback </em>must be invoked every time a new
application is installed, removed, or updated.
            </p>
            <p>
The change detection must continue until the <em>removeAppInfoEventListener()</em> method is called
with the corresponding listener identifier.
            </p>
           
 *
 * @param {ApplicationInformationEventCallback} eventCallback
 * @type Number
 * @memberOf ApplicationManager
 * @returns {Number}
 */
ApplicationManager.prototype.addAppInfoEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Removes the listener to stop receiving notifications for changes on the list of installed applications on a device.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.removeAppInfoEventListener = function(watchId){ return; };

/**
 * An attribute to store the string that defines the action to be performed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.operation = new String();

/**
 * An attribute to store the URI needed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.uri = new String();

/**
 * An attribute to store the MIME type of content.
 *
 * @type String
 */
ApplicationControl.prototype.mime = new String();

/**
 * An attribute to store the category of the application to be launched.
 *
 * @type String
 */
ApplicationControl.prototype.category = new String();

/**
 * An array of attributes to store the data needed for an application control.
 *
 * @type array
 */
ApplicationControl.prototype.data = new array();

/**
 * Called when an application is installed.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when an application is updated.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when an application is uninstalled.
 *
 * @param {ApplicationId} id
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the key of the application meta data
 *
 * @type String
 */
ApplicationMetaData.prototype.key = new String();

/**
 * An attribute to store the value of the application meta data
 *
 * @type String
 */
ApplicationMetaData.prototype.value = new String();

/**
 * An attribute to store the application control object that describes the caller application's request. It contains the information that the calling application passed to .
 *
 * @type ApplicationControl
 */
RequestedApplicationControl.prototype.appControl = new ApplicationControl();

/**
 * An attribute to store the caller application's ID.
 *
 * @type ApplicationId
 */
RequestedApplicationControl.prototype.callerAppId = new ApplicationId();

/**
 * Sends the results to the caller application.
 *
 * @param {array} data
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyResult = function(data){ return; };

/**
 * Notifies the calling application that the application failed to perform the requested action.
 *
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyFailure = function(){ return; };

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for the current application such as exit or hide.
        </p>
 * <p>
For more information on the Application features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
Tizen.prototype.application = new ApplicationManager();

/**
 * The ArchiveManagerObject interface defines what is instantiated in the object.
          <p>
The <em>tizen.archive</em> object allows access to the Archive API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ArchiveManagerObject}
 */
function ArchiveManagerObject() {};
ArchiveManagerObject.prototype = new Object();

/**
 * The ArchiveFile interface provides access to member files of the archive file.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFile}
 */
function ArchiveFile() {};
ArchiveFile.prototype = new Object();

/**
 * The ArchiveFileEntryArraySuccessCallback interface provides a SuccessCallback for the ArchiveFile::getEntries() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntryArraySuccessCallback}
 */
function ArchiveFileEntryArraySuccessCallback() {};
ArchiveFileEntryArraySuccessCallback.prototype = new Object();

/**
 * The ArchiveFileSuccessCallback interface provides a SuccessCallback for the ArchiveManager::open() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileSuccessCallback}
 */
function ArchiveFileSuccessCallback() {};
ArchiveFileSuccessCallback.prototype = new Object();

/**
 * The ArchiveFileEntrySuccessCallback interface provides a SuccessCallback for the ArchiveFile::getEntryByName() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntrySuccessCallback}
 */
function ArchiveFileEntrySuccessCallback() {};
ArchiveFileEntrySuccessCallback.prototype = new Object();

/**
 * The ArchiveManager interface provides methods for global operations related to ArchiveFile.
 *
 * @super Object
 * @constructor
 * @return {ArchiveManager}
 */
function ArchiveManager() {};
ArchiveManager.prototype = new Object();

/**
 * The ArchiveFileEntry interface provides access to ArchiveFile member information and file data.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntry}
 */
function ArchiveFileEntry() {};
ArchiveFileEntry.prototype = new Object();

/**
 * The ArchiveFileProgressCallback interface provides a ProgressCallback for ArchiveFile and ArchiveFileEntry methods.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileProgressCallback}
 */
function ArchiveFileProgressCallback() {};
ArchiveFileProgressCallback.prototype = new Object();

/**
 * The Archive API provides functions to create and manage archive files. You can extract files, add a file to an archive file, and so on.
 * <p>
For more information about how to use Archive API, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/io_guide/archive.htm">Archive Guide</a>.
        </p>
 *
 * @type ArchiveManager
 */
ArchiveManagerObject.prototype.archive = new ArchiveManager();

/**
 * attribute File mode when it is opened.
 *
 * @type FileMode
 */
ArchiveFile.prototype.mode = new FileMode();

/**
 * Size of all the files included in the archive after decompression.
 * <p>
The size is <var>null</var> until the archive is opened.
            </p>
 *
 * @type Number
 */
ArchiveFile.prototype.decompressedSize = new Number();

/**
 * Adds a new member file to .
            <p>
If <em>sourceFile</em> refers to a directory,
the directory and its content will be added to ArchiveFile.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>sourceFile</em> does not exist              </li>
              <li>
IOError: If archiveFile can not be written due the lack of access permission              </li>
              <li>
InvalidModificationError: If the operation results in a name conflict in the archive<br/>i.e. two entries in the archive with the same name (including directory names).              </li>
              <li>
UnknownError: In any case of any other error              </li>
            </ul>
            <p>
Name stored for new entries is constructed from <em>sourceFile</em> according to the
<a href="#ArchiveFileEntryOptions::stripSourceDirectory">stripSourceDirectory</a> and <a href="#ArchiveFileEntryOptions::destination">destination</a> options. Names are constructed as follows:
            </p>
            <table>
              <tr>
                <th>
source file                </th>
                <th>
destination                </th>
                <th>
stripSourceDirectory                </th>
                <th>
resulting entry name                </th>
              </tr>
              <tr>
                <td>
documents/subdir/second/justName.ext                </td>
                <td>
<em>(empty)</em>                </td>
                <td>
<var>false</var>                </td>
                <td>
subdir/second/justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/second/justName.ext                </td>
                <td>
<em>(empty)</em>                </td>
                <td>
<var>true</var>                </td>
                <td>
justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/justName.ext                </td>
                <td>
"report3"                </td>
                <td>
<var>false</var>                </td>
                <td>
report3/subdir/justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/justName.ext                </td>
                <td>
"report3"                </td>
                <td>
<var>true</var>                </td>
                <td>
report3/justName.ext                </td>
              </tr>
            </table>
           
 *
 * @param {FileReference} sourceFile
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {ArchiveFileEntryOptions} options
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.add = function(sourceFile, onsuccess, onerror, onprogress, options){ var ret = new Number(); return ret; };

/**
 * Extracts every file from this to a given directory.
            <p>
All extracted files will be located in the given directory.
            </p>
            <p>
The <var>overwrite</var> attribute determines whether extracted files can overwrite existing files.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>destinationDirectory</em> does not exist              </li>
              <li>
IOError: If destinationDirectory can not be written to (e.g due to insufficient permissions)              </li>
              <li>
InvalidModificationError: If during extracting it is detected that an existing file would
have to be overwritten and the <em>overwrite</em> argument is <var>false</var>              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {FileReference} destinationDirectory
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {Boolean} overwrite
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.extractAll = function(destinationDirectory, onsuccess, onerror, onprogress, overwrite){ var ret = new Number(); return ret; };

/**
 * Retrieves information about the member files in .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {ArchiveFileEntryArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.getEntries = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Retrieves information about with the specified name in .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If <em>ArchiveFileEntry</em> with the specific name does not exist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {ArchiveFileEntrySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.getEntryByName = function(name, onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Closes the .
            <p>
Call this method when the archive file is not used any more. Once you call this method, the archive file object will not be available and any further operation attempt results in an <em>InvalidStateError</em>.<br/>Calling <em>close()</em> on an archive file object which is already closed does not raise any exception.
            </p>
           
 *
 * @type void
 * @memberOf ArchiveFile
 * @returns {void}
 */
ArchiveFile.prototype.close = function(){ return; };

/**
 * Called when all file entries in the archive file are retrieved successfully.
 *
 * @param {array} entries
 * @type void
 * @memberOf ArchiveFileEntryArraySuccessCallback
 * @returns {void}
 */
ArchiveFileEntryArraySuccessCallback.prototype.onsuccess = function(entries){ return; };

/**
 * Called when the archive file with the given name is ready to use.
 *
 * @param {ArchiveFile} archive
 * @type void
 * @memberOf ArchiveFileSuccessCallback
 * @returns {void}
 */
ArchiveFileSuccessCallback.prototype.onsuccess = function(archive){ return; };

/**
 * Called when the file with the given name through getEntryByName() is found successfully.
 *
 * @param {ArchiveFileEntry} entry
 * @type void
 * @memberOf ArchiveFileEntrySuccessCallback
 * @returns {void}
 */
ArchiveFileEntrySuccessCallback.prototype.onsuccess = function(entry){ return; };

/**
 * Opens the archive file. After this operation, it is possible to add or get files to and from the archive.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If archiveFile format is not recognized              </li>
              <li>
NotFoundError: If the <em>mode</em> is "r" and the <em>file</em> does not exist, or the <em>mode</em> is not "r" and the <em>file</em> cannot be created because the path of the file after excluding its file name does not exist              </li>
              <li>
IOError: If the access is denied due to insufficient permissions              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
            <p>
Use <em>mode</em> depending on which operation are intended:
            </p>
            <table>
              <tr>
                <th>
Mode                </th>
                <th>
Description                </th>
              </tr>
              <tr>
                <td>
r                </td>
                <td>
Use this mode for extracting or getting information about the contents of an archive file. <br/><em>file</em> must exist. If the <em>file</em> does not exist, <em>onerror</em> will be invoked (<em>NotFoundError</em>).<br/>When an archive file is opened in this mode, <em>add()</em> will not be available. (<em>IOError</em> will be thrown.)                 </td>
              </tr>
              <tr>
                <td>
w                </td>
                <td>
Use this mode to create an archive file and add files to the archive file. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>true</var>, the existing file will be overwritten with empty archive. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>false</var>, <em>onerror</em> callback will be invoked (<em>InvalidModificationError</em>). <br/>When an archive file is opened in this mode, <em>getEntries()</em>, <em>getEntryByName()</em>, and <em>extractAll()</em> are not available. (<em>IOError</em> will be thrown.)
                </td>
              </tr>
              <tr>
                <td>
rw                </td>
                <td>
Use this mode for archive zipping/unzipping. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>true</var>, the existing file will be overwritten with an empty archive. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>false</var>, the existing contents are preserved.
Both adding and extracting will be available. <br/>                </td>
              </tr>
              <tr>
                <td>
a                </td>
                <td>
Use this mode to add new files to an archive file. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists, then the previous contents of the archive file are preserved and new files can be added to the archive file.
In this mode, <em>getEntries()</em>, <em>getEntryByName()</em>, and <em>extractAll()</em> are not available. (<em>IOError</em> will be thrown.)
                </td>
              </tr>
            </table>
           
 *
 * @param {FileReference} file
 * @param {FileMode} mode
 * @param {ArchiveFileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileOptions} options
 * @type Number
 * @memberOf ArchiveManager
 * @returns {Number}
 */
ArchiveManager.prototype.open = function(file, mode, onsuccess, onerror, options){ var ret = new Number(); return ret; };

/**
 * Cancels an operation with the given identifier.
 *
 * @param {Number} operationIdentifier
 * @type void
 * @memberOf ArchiveManager
 * @returns {void}
 */
ArchiveManager.prototype.abort = function(operationIdentifier){ return; };

/**
 * Path identifying the member file of ArchiveFile. This is a full path with the directory and base name of the entry.
 *
 * @type String
 */
ArchiveFileEntry.prototype.name = new String();

/**
 * Original size of the member file [bytes].
 * <p>
If the ArchiveFileEntry member is a folder, the attribute value will be the sum of sizes of all files in this directory.
            </p>
 *
 * @type Number
 */
ArchiveFileEntry.prototype.size = new Number();

/**
 * Amount of storage space used by the member file, which may be compressed, in ArchiveFile [bytes].
 * <p>
If ArchiveFileEntry member is a folder, the attribute will be sum of the sizes of all files in this directory.
            </p>
 * <p>
Until a new entry is added to the archive, the compressedSize is <var>null</var>            </p>
 *
 * @type Number
 */
ArchiveFileEntry.prototype.compressedSize = new Number();

/**
 * Date and time stored with the member file. This is usually the modification date of the file.
 *
 * @type Date
 */
ArchiveFileEntry.prototype.modified = new Date();

/**
 * Extracts ArchiveFileEntry to the given location.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>destinationDirectory</em> does not exist              </li>
              <li>
InvalidModificationError: If the file already exists and overwriting is not allowed              </li>
              <li>
IOError: If destinationDirectory can not be written to              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {FileReference} destinationDirectory
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {Boolean} stripName
 * @param {Boolean} overwrite
 * @type Number
 * @memberOf ArchiveFileEntry
 * @returns {Number}
 */
ArchiveFileEntry.prototype.extract = function(destinationDirectory, onsuccess, onerror, onprogress, stripName, overwrite){ var ret = new Number(); return ret; };

/**
 * Called to signal compressing or extracting operation progress.
 *
 * @param {Number} operationIdentifier
 * @param {Number} value
 * @param {String} filename
 * @type void
 * @memberOf ArchiveFileProgressCallback
 * @returns {void}
 */
ArchiveFileProgressCallback.prototype.onprogress = function(operationIdentifier, value, filename){ return; };

/**
 * The Archive API provides functions to create and manage archive files. You can extract files, add a file to an archive file, and so on.
 * <p>
For more information about how to use Archive API, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/io_guide/archive.htm">Archive Guide</a>.
        </p>
 *
 * @type ArchiveManager
 */
Tizen.prototype.archive = new ArchiveManager();

/**
 * The callback function used to return content to scan.
 *
 * @super Object
 * @constructor
 * @return {ContentScanSuccessCallback}
 */
function ContentScanSuccessCallback() {};
ContentScanSuccessCallback.prototype = new Object();

/**
 * The AudioContentLyrics interface provides lyrics for music.
 *
 * @super Object
 * @constructor
 * @return {AudioContentLyrics}
 */
function AudioContentLyrics() {};
AudioContentLyrics.prototype = new Object();

/**
 * The PlaylistItemArraySuccessCallback interface specifies a success callback that is invoked when a list of playlist items are successfully retrieved.
 *
 * @super Object
 * @constructor
 * @return {PlaylistItemArraySuccessCallback}
 */
function PlaylistItemArraySuccessCallback() {};
PlaylistItemArraySuccessCallback.prototype = new Object();

/**
 * The Content interface provides access to the properties of a content item.
 *
 * @super Object
 * @constructor
 * @return {Content}
 */
function Content() {};
Content.prototype = new Object();

/**
 * Defines what is instantiated by the Tizen object.
          <p>
The <em>tizen.content </em>object allows accessing the functionality of the Content module.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContentManagerObject}
 */
function ContentManagerObject() {};
ContentManagerObject.prototype = new Object();

/**
 * The callback function used to return a list of content objects.
 *
 * @super Object
 * @constructor
 * @return {ContentArraySuccessCallback}
 */
function ContentArraySuccessCallback() {};
ContentArraySuccessCallback.prototype = new Object();

/**
 * The ImageContent interface extends a basic object with image-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {ImageContent}
 */
function ImageContent() {};
ImageContent.prototype = new Content();

/**
 * This interface specifies a set of methods that are invoked every time a content change occurs.
 *
 * @super Object
 * @constructor
 * @return {ContentChangeCallback}
 */
function ContentChangeCallback() {};
ContentChangeCallback.prototype = new Object();

/**
 * The AudioContent interface extends a basic object with audio-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {AudioContent}
 */
function AudioContent() {};
AudioContent.prototype = new Content();

/**
 * The PlaylistArraySuccessCallback interface specifies a success callback that is invoked when all existing playlists are retrieved successfully.
          <p>
It is used in <em>tizen.content.getPlaylists()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PlaylistArraySuccessCallback}
 */
function PlaylistArraySuccessCallback() {};
PlaylistArraySuccessCallback.prototype = new Object();

/**
 * The VideoContent interface extends a basic object with video-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {VideoContent}
 */
function VideoContent() {};
VideoContent.prototype = new Content();

/**
 * The ContentManager interface provides operations to retrieve and manipulate content.
 *
 * @super Object
 * @constructor
 * @return {ContentManager}
 */
function ContentManager() {};
ContentManager.prototype = new Object();

/**
 * The PlaylistItem interface represents a playlist item.
 *
 * @super Object
 * @constructor
 * @return {PlaylistItem}
 */
function PlaylistItem() {};
PlaylistItem.prototype = new Object();

/**
 * The callback function used to return a list of ContentDirectory objects.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectoryArraySuccessCallback}
 */
function ContentDirectoryArraySuccessCallback() {};
ContentDirectoryArraySuccessCallback.prototype = new Object();

/**
 * The Playlist interface represents a playlist.
 *
 * @super Object
 * @constructor
 * @return {Playlist}
 */
function Playlist() {};
Playlist.prototype = new Object();

/**
 * The PlaylistSuccessCallback interface specifies a success callback that is invoked when a new playlist is successfully created.
          <p>
It is used in <em>tizen.content.createPlaylist()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PlaylistSuccessCallback}
 */
function PlaylistSuccessCallback() {};
PlaylistSuccessCallback.prototype = new Object();

/**
 * The ContentDirectory interface provides access to properties of a content directory.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectory}
 */
function ContentDirectory() {};
ContentDirectory.prototype = new Object();

/**
 * Called when the scanning has been completed.
 *
 * @param {String} contentURI
 * @type void
 * @memberOf ContentScanSuccessCallback
 * @returns {void}
 */
ContentScanSuccessCallback.prototype.onsuccess = function(contentURI){ return; };

/**
 * The type of lyrics, that is, whether they are synchronized with the music.
 *
 * @type AudioContentLyricsType
 */
AudioContentLyrics.prototype.type = new AudioContentLyricsType();

/**
 * The array of timestamps in milliseconds for lyrics.
 * <p>
If the lyrics are not synchronized (if there is no time information for the lyrics) the array is undefined.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.timestamps = new array();

/**
 * The array of lyrics snippets.
 * <p>
If the lyrics are not synchronized, the array has only one member with full lyrics.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.texts = new array();

/**
 * Called when the method completes successfully.
 *
 * @param {array} items
 * @type void
 * @memberOf PlaylistItemArraySuccessCallback
 * @returns {void}
 */
PlaylistItemArraySuccessCallback.prototype.onsuccess = function(items){ return; };

/**
 * The list of attributes that are editable to the local backend using the update() or updateBatch() method.
 *
 * @type array
 */
Content.prototype.editableAttributes = new array();

/**
 * The opaque content identifier.
 *
 * @type ContentId
 */
Content.prototype.id = new ContentId();

/**
 * The content name. The initial value is the file name of the content.
 *
 * @type String
 */
Content.prototype.name = new String();

/**
 * The content type.
 *
 * @type ContentType
 */
Content.prototype.type = new ContentType();

/**
 * The content MIME type.
 *
 * @type String
 */
Content.prototype.mimeType = new String();

/**
 * The content title.
 *
 * @type String
 */
Content.prototype.title = new String();

/**
 * The URI to access the content.
 *
 * @type String
 */
Content.prototype.contentURI = new String();

/**
 * The array of content thumbnail URIs.
 *
 * @type array
 */
Content.prototype.thumbnailURIs = new array();

/**
 * The date when content has been released publicly. If only the release year is known, then the month and date are set to January and 1st respectively.
 *
 * @type Date
 */
Content.prototype.releaseDate = new Date();

/**
 * The last modified date for a content item.
 *
 * @type Date
 */
Content.prototype.modifiedDate = new Date();

/**
 * The file size of the content in bytes.
 *
 * @type Number
 */
Content.prototype.size = new Number();

/**
 * The content description.
 *
 * @type String
 */
Content.prototype.description = new String();

/**
 * The content rating. This value can range from to .
 *
 * @type Number
 */
Content.prototype.rating = new Number();

/**
 * Boolean value that indicates whether a content item is marked as a favorite.
 *
 * @type Boolean
 */
Content.prototype.isFavorite = new Boolean();

/**
 * The Content API provides functionality to discover content such as images, videos, music, or others.
 * <p>
It is possible to search for specific content using filters.
The API also supports setting the attributes of specific content.
        </p>
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/content_guide/mediacontent.htm">Content Guide</a>.
        </p>
 * <p>
For more information about how to use the playlist feature of the Content API, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/content_guide/playlist.htm">Playlist Guide</a>.
        </p>
 * <p>
Playlist functionality has been added in Tizen 2.3.
        </p>
 *
 * @type ContentManager
 */
ContentManagerObject.prototype.content = new ContentManager();

/**
 * Called when the list of content is retrieved successfully.
 *
 * @param {array} contents
 * @type void
 * @memberOf ContentArraySuccessCallback
 * @returns {void}
 */
ContentArraySuccessCallback.prototype.onsuccess = function(contents){ return; };

/**
 * The geographical location where the image has been made.
 *
 * @type SimpleCoordinates
 */
ImageContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The width of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.width = new Number();

/**
 * The height of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.height = new Number();

/**
 * The image orientation.
 *
 * @type ImageContentOrientation
 */
ImageContent.prototype.orientation = new ImageContentOrientation();

/**
 * Called when content is added.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentadded = function(content){ return; };

/**
 * Called when content is updated.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentupdated = function(content){ return; };

/**
 * Called when content is removed.
 *
 * @param {ContentId} id
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentremoved = function(id){ return; };

/**
 * The album name to which the audio belongs.
 *
 * @type String
 */
AudioContent.prototype.album = new String();

/**
 * The list of genres to which the audio belongs.
 *
 * @type array
 */
AudioContent.prototype.genres = new array();

/**
 * The list of artists who created the audio.
 *
 * @type array
 */
AudioContent.prototype.artists = new array();

/**
 * The list of composers for the music.
 *
 * @type array
 */
AudioContent.prototype.composers = new array();

/**
 * The lyrics of a song in an audio file.
 *
 * @type AudioContentLyrics
 */
AudioContent.prototype.lyrics = new AudioContentLyrics();

/**
 * The copyright information.
 *
 * @type String
 */
AudioContent.prototype.copyright = new String();

/**
 * The audio bitrate in bits per second. By default, this value is 0.
 *
 * @type Number
 */
AudioContent.prototype.bitrate = new Number();

/**
 * The track number if the audio belongs to an album.
 *
 * @type Number
 */
AudioContent.prototype.trackNumber = new Number();

/**
 * The audio duration in milliseconds.
 *
 * @type Number
 */
AudioContent.prototype.duration = new Number();

/**
 * Called when the method completes successfully.
 *
 * @param {array} playlists
 * @type void
 * @memberOf PlaylistArraySuccessCallback
 * @returns {void}
 */
PlaylistArraySuccessCallback.prototype.onsuccess = function(playlists){ return; };

/**
 * The geographical location where the video has been made.
 *
 * @type SimpleCoordinates
 */
VideoContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The album name to which the video belongs.
 *
 * @type String
 */
VideoContent.prototype.album = new String();

/**
 * The list of artists who created the video.
 *
 * @type array
 */
VideoContent.prototype.artists = new array();

/**
 * The video duration in milliseconds.
 *
 * @type Number
 */
VideoContent.prototype.duration = new Number();

/**
 * The width of a video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.width = new Number();

/**
 * The height of the video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.height = new Number();

/**
 * Updates attributes of content in the content database synchronously.
            <p>
When an application has changed some attributes of the content, this method allows
writing it back to the content database.
            </p>
           
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.update = function(content){ return; };

/**
 * Updates a batch of content attributes in the content database asynchronously.
            <p>
When an application has changed any attributes in the array of content, this method allows writing them
back to the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {array} contents
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.updateBatch = function(contents, successCallback, errorCallback){ return; };

/**
 * Gets a list of content directories.
            <p>
This method returns (via callback) a list of content directory objects. To obtain a list of contents
in a specific directory, use the find() method with the directory ID.
            </p>
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentDirectoryArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getDirectories = function(successCallback, errorCallback){ return; };

/**
 * Finds contents that satisfy the conditions set by a filter.
            <p>
This method allows searching based on a supplied filter. For more details on AbstractFilter, see the
<a href="tizen.html#::Tizen::AbstractFilter">Tizen</a> module. The filter allows precise searching such
as "return all songs by artist U2, ordered by name".
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ContentDirectoryId} directoryId
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.find = function(successCallback, errorCallback, directoryId, filter, sortMode, count, offset){ return; };

/**
 * Scans a file to create or update content in the content database.
            <p>
When an application creates or updates content, this method allows to scan it
and then insert or update the content in the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error detected asynchronously              </li>
            </ul>
           
 *
 * @param {String} contentURI
 * @param {ContentScanSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.scanFile = function(contentURI, successCallback, errorCallback){ return; };

/**
 * Sets a listener to receive notifications of content changes.
 *
 * @param {ContentChangeCallback} changeCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.setChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to unsubscribe from receiving notifications for content changes.
 *
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.unsetChangeListener = function(){ return; };

/**
 * Gets all playlists.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getPlaylists = function(successCallback, errorCallback){ return; };

/**
 * Creates a new playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If <var>name</var> is empty or is same as the name of an existing playlist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {PlaylistSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Playlist} sourcePlaylist
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.createPlaylist = function(name, successCallback, errorCallback, sourcePlaylist){ return; };

/**
 * Removes a playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.removePlaylist = function(id, successCallback, errorCallback){ return; };

/**
 * Content contained in this playlist item.
 *
 * @type Content
 */
PlaylistItem.prototype.content = new Content();

/**
 * Called when the directory list is retrieved successfully.
 *
 * @param {array} directories
 * @type void
 * @memberOf ContentDirectoryArraySuccessCallback
 * @returns {void}
 */
ContentDirectoryArraySuccessCallback.prototype.onsuccess = function(directories){ return; };

/**
 * Identifier of a playlist.
 *
 * @type PlaylistId
 */
Playlist.prototype.id = new PlaylistId();

/**
 * Name of a playlist (case sensitive and unique).
 * <p>
When <var>name</var> is set, the change is recorded in the database.
            </p>
 *
 * @type String
 */
Playlist.prototype.name = new String();

/**
 * Number of playlist items in the playlist.
 *
 * @type Number
 */
Playlist.prototype.numberOfTracks = new Number();

/**
 * Thumbnail URI of a playlist.
 * <p>
By default, this attribute is set to <var>null</var>. <br/>When <var>thumbnailURI</var> is set, the change is recorded in the database.
            </p>
 *
 * @type String
 */
Playlist.prototype.thumbnailURI = new String();

/**
 * Adds a content item to a playlist.
            <p>
See code example for the <em>createPlaylist()</em> method.
            </p>
           
 *
 * @param {Content} item
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.add = function(item){ return; };

/**
 * Adds tracks to a playlist as a batch, asynchronously.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.addBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Removes a track from a playlist.
 *
 * @param {PlaylistItem} item
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.remove = function(item){ return; };

/**
 * Removes tracks from a playlist as a batch, asynchronously.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.removeBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Gets playlist items from a playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value (e.g <em>count</em> or <em>offset</em> is a negative number)              </li>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistItemArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.get = function(successCallback, errorCallback, count, offset){ return; };

/**
 * Changes the play order of all playlist items in the playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case the item in the passed <em>items</em> array is not inside this playlist, or the <em>items</em> array does not contain all items from the playlist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.setOrder = function(items, successCallback, errorCallback){ return; };

/**
 * Moves the specified item up or down a specified amount in the play order.
            <p>
If <var>current index + delta</var> is:
            </p>
            <ul>
              <li>
<var>&lt; 0</var> then the item is moved to the first position in the playlist              </li>
              <li>
<var>≥ number of tracks</var> then the item is moved to the last position in the playlist              </li>
            </ul>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case the item in the passed <em>items</em> array is not inside this playlist or some item of this playlist is not included in <em>items</em>              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {PlaylistItem} item
 * @param {Number} delta
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.move = function(item, delta, successCallback, errorCallback){ return; };

/**
 * Called when the method completes successfully.
 *
 * @param {Playlist} playlist
 * @type void
 * @memberOf PlaylistSuccessCallback
 * @returns {void}
 */
PlaylistSuccessCallback.prototype.onsuccess = function(playlist){ return; };

/**
 * The opaque content directory identifier.
 *
 * @type ContentDirectoryId
 */
ContentDirectory.prototype.id = new ContentDirectoryId();

/**
 * The directory path on the device.
 *
 * @type String
 */
ContentDirectory.prototype.directoryURI = new String();

/**
 * The directory name.
 *
 * @type String
 */
ContentDirectory.prototype.title = new String();

/**
 * The type of device storage.
 *
 * @type ContentDirectoryStorageType
 */
ContentDirectory.prototype.storageType = new ContentDirectoryStorageType();

/**
 * The last modified date for a directory.
 *
 * @type Date
 */
ContentDirectory.prototype.modifiedDate = new Date();

/**
 * The Content API provides functionality to discover content such as images, videos, music, or others.
 * <p>
It is possible to search for specific content using filters.
The API also supports setting the attributes of specific content.
        </p>
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/content_guide/mediacontent.htm">Content Guide</a>.
        </p>
 * <p>
For more information about how to use the playlist feature of the Content API, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/content_guide/playlist.htm">Playlist Guide</a>.
        </p>
 * <p>
Playlist functionality has been added in Tizen 2.3.
        </p>
 *
 * @type ContentManager
 */
Tizen.prototype.content = new ContentManager();

/**
 * The DownloadManager interface handles requests for downloading. Each step of a download operation is informed through callbacks.
 *
 * @super Object
 * @constructor
 * @return {DownloadManager}
 */
function DownloadManager() {};
DownloadManager.prototype = new Object();

/**
 * This interface defines the default download manager that is instantiated by the object. The object allows access to the functionality of the Download API.
 *
 * @super Object
 * @constructor
 * @return {DownloadManagerObject}
 */
function DownloadManagerObject() {};
DownloadManagerObject.prototype = new Object();

/**
 * The DownloadRequest interface defines the download request object.
 *
 * @super Object
 * @constructor
 * @return {DownloadRequest}
 */
function DownloadRequest() {};
DownloadRequest.prototype = new Object();

/**
 * The DownloadCallback defines notification callbacks for a download state change or progress.
 *
 * @super Object
 * @constructor
 * @return {DownloadCallback}
 */
function DownloadCallback() {};
DownloadCallback.prototype = new Object();

/**
 * Starts a download operation with the specified URL information.
 *
 * @param {DownloadRequest} downloadRequest
 * @param {DownloadCallback} downloadCallback
 * @type Number
 * @memberOf DownloadManager
 * @returns {Number}
 */
DownloadManager.prototype.start = function(downloadRequest, downloadCallback){ var ret = new Number(); return ret; };

/**
 * Cancels an ongoing download operation that is specified by the parameter.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.cancel = function(downloadId){ return; };

/**
 * Pauses an ongoing download operation that is specified by the parameter. The paused download operation can be resumed later by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.pause = function(downloadId){ return; };

/**
 * Resumes a paused download operation that is specified by the parameter.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.resume = function(downloadId){ return; };

/**
 * Gets the download state of an operation synchronously with the specified ID.
 *
 * @param {Number} downloadId
 * @type DownloadState
 * @memberOf DownloadManager
 * @returns {DownloadState}
 */
DownloadManager.prototype.getState = function(downloadId){ var ret = new DownloadState(); return ret; };

/**
 * Gets the DownloadRequest object from a given ID.
 *
 * @param {Number} downloadId
 * @type DownloadRequest
 * @memberOf DownloadManager
 * @returns {DownloadRequest}
 */
DownloadManager.prototype.getDownloadRequest = function(downloadId){ var ret = new DownloadRequest(); return ret; };

/**
 * Gets the MIME type of the downloaded file.
 *
 * @param {Number} downloadId
 * @type String
 * @memberOf DownloadManager
 * @returns {String}
 */
DownloadManager.prototype.getMIMEType = function(downloadId){ var ret = new String(); return ret; };

/**
 * Sets the download callback to the download operation of the given ID. It's possible to change or register the listener of the download operation using the saved ID.
 *
 * @param {Number} downloadId
 * @param {DownloadCallback} downloadCallback
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.setListener = function(downloadId, downloadCallback){ return; };

/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 * <p>
For more information on the Download features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/content_guide/download.htm">Download Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.wifi
 * @type DownloadManager
 */
DownloadManagerObject.prototype.download = new DownloadManager();

/**
 * An attribute to store the URL of the object to download.
 *
 * @type String
 */
DownloadRequest.prototype.url = new String();

/**
 * An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
 * <p>
If the destination is not specified or is an empty string, the file will be downloaded to the default storage: "Downloads". For more information, see <a href="filesystem.html">Filesystem API</a>.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.destination = new String();

/**
 * An attribute to store the file name for the specified URL.
 * <p>
If the file name is not given or is an empty string, the original file name from the URL is used.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.fileName = new String();

/**
 * An attribute to store the allowed network type.
 * <p>
If the network type is not given, all network types are allowed.
            </p>
 * <p>
The default value is <var>ALL</var>.
            </p>
 *
 * @type DownloadNetworkType
 */
DownloadRequest.prototype.networkType = new DownloadNetworkType();

/**
 * An attribute to store extra HTTP header fields.
 * <p>
For more information about HTTP header fields, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2">RFC-2616</a>            </p>
 * <p>
The default value is an empty object.
            </p>
 *
 * @type DownloadHTTPHeaderFields
 */
DownloadRequest.prototype.httpHeader = new DownloadHTTPHeaderFields();

/**
 * Called when a download is successful and it is called multiple times as the download progresses. The interval between the callback is platform-dependent. When the download is started, the can be .
 *
 * @param {Number} downloadId
 * @param {Number} receivedSize
 * @param {Number} totalSize
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onprogress = function(downloadId, receivedSize, totalSize){ return; };

/**
 * Called when the download operation is paused by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onpaused = function(downloadId){ return; };

/**
 * Called when the download operation is canceled by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncanceled = function(downloadId){ return; };

/**
 * Called when the download operation is completed with the final full path. If the same file name already exists in the destination, it is changed according to the platform policy and delivered in this callback.
 *
 * @param {Number} downloadId
 * @param {String} fullPath
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncompleted = function(downloadId, fullPath){ return; };

/**
 * Called when the download operation fails.
 *
 * @param {Number} downloadId
 * @param {WebAPIError} error
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onfailed = function(downloadId, error){ return; };

/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 * <p>
For more information on the Download features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/content_guide/download.htm">Download Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.wifi
 * @type DownloadManager
 */
Tizen.prototype.download = new DownloadManager();

/**
 * The ExifThumbnailSuccessCallback interface provides a success callback that is invoked when the Exif thumbnail has been retrieved. This callback interface specifies a success method with the URI for the thumbnail as an input parameter. It is used in exif.getThumbnail().
 *
 * @super Object
 * @constructor
 * @return {ExifThumbnailSuccessCallback}
 */
function ExifThumbnailSuccessCallback() {};
ExifThumbnailSuccessCallback.prototype = new Object();

/**
 * The ExifInformation interface implements the object.
          <p>
When the format of a value is given in the attribute description then this format should be followed when updating values.
          </p>
          <p>
Every Exif related attribute is nullable - null means that this information is missing in the file.
By setting an attribute to null and saving <em>ExifInformation</em> one can remove that Exif tag from the file.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ExifInformation}
 */
function ExifInformation() {};
ExifInformation.prototype = new Object();

/**
 * The ExifManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the Exif data of a JPEG file.
 *
 * @super Object
 * @constructor
 * @return {ExifManagerObject}
 */
function ExifManagerObject() {};
ExifManagerObject.prototype = new Object();

/**
 * The ExifInformationSuccessCallback interface provides a success callback that is invoked when the Exif information object has been retrieved. This callback interface specifies a success method with an object as an input parameter. It is used in exif.getExifInfo().
 *
 * @super Object
 * @constructor
 * @return {ExifInformationSuccessCallback}
 */
function ExifInformationSuccessCallback() {};
ExifInformationSuccessCallback.prototype = new Object();

/**
 * The ExifManager interface provides methods to retrieve the object and save the Exif data of the object in a JPEG file.
          <p>
It provides access to the API functionalities through the <em>tizen.exif</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ExifManager}
 */
function ExifManager() {};
ExifManager.prototype = new Object();

/**
 * Called when the thumbnail of the JPEG file has been successfully retrieved.
 *
 * @param {String} uri
 * @type void
 * @memberOf ExifThumbnailSuccessCallback
 * @returns {void}
 */
ExifThumbnailSuccessCallback.prototype.onsuccess = function(uri){ return; };

/**
 * URI of the image.
 * <p>
The path to the file from which <em>ExifInformation</em> data is collected.
            </p>
 *
 * @type String
 */
ExifInformation.prototype.uri = new String();

/**
 * Width of the image i.e. the number of points (pixels) per image line.
 * <p>
Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.width = new Number();

/**
 * Height of the image i.e. the number of lines in the image.
 * <p>
Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.height = new Number();

/**
 * Name of the camera manufacturer.
 *
 * @type String
 */
ExifInformation.prototype.deviceMaker = new String();

/**
 * Model name or model number of the camera or input device.
 *
 * @type String
 */
ExifInformation.prototype.deviceModel = new String();

/**
 * Date and time when the picture was taken.
 *
 * @type Date
 */
ExifInformation.prototype.originalTime = new Date();

/**
 * Orientation of the image the image when displayed.
 * <p>
This attribute shows the relation between the stored image data and the visual content orientation.
In other words - how a stored image should be oriented when presented to the user.
            </p>
 *
 * @type ImageContentOrientation
 */
ExifInformation.prototype.orientation = new ImageContentOrientation();

/**
 * The f-number when the image was taken.
 * <p>
Exif specification: "Conversion is not made to the focal length of a 35 mm film".
            </p>
 * <p>
The <a href="http://en.wikipedia.org/wiki/F-number">f-number</a> is the ratio of the lens' focal length to the diameter of the entrance pupil.
F-number is also called focal ratio, f-ratio, f-stop, or relative aperture.
Example values: 1.4, 2, 2.8, 4, 5.6, 8, 11 ...
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.fNumber = new Number();

/**
 * Photo sensitivity (also called ISO speed and ISO latitude) of the camera or input device.
 * <p>
Example values: 80, 100, 200, 400, 800, 1600, 3200 ..
            </p>
 *
 * @type array
 */
ExifInformation.prototype.isoSpeedRatings = new array();

/**
 * Exposure time, given in seconds.
 * <p>
If exposure time is below one second it is expressed as 1/x.
For example: 1 second exposure is "1", 0.25s is "1/4".
            </p>
 *
 * @type String
 */
ExifInformation.prototype.exposureTime = new String();

/**
 * Exposure balance program used by the camera to set exposure when the picture was taken.
 *
 * @type ExposureProgram
 */
ExifInformation.prototype.exposureProgram = new ExposureProgram();

/**
 * Boolean value that indicates whether flash was fired when the picture was taken (true: flash fired).
 *
 * @type Boolean
 */
ExifInformation.prototype.flash = new Boolean();

/**
 * Focal length of the lens, given in mm.
 *
 * @type Number
 */
ExifInformation.prototype.focalLength = new Number();

/**
 * White balance mode set when the picture was taken.
 *
 * @type WhiteBalanceMode
 */
ExifInformation.prototype.whiteBalance = new WhiteBalanceMode();

/**
 * Latitude and longitude of the camera (from GPS) when the picture was taken.
 *
 * @type SimpleCoordinates
 */
ExifInformation.prototype.gpsLocation = new SimpleCoordinates();

/**
 * Altitude (from GPS) of the camera when the picture was taken.
 * <p>
This value is expressed in meters above sea level (can be negative).
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.gpsAltitude = new Number();

/**
 * Name of the method used for finding the location.
 *
 * @type String
 */
ExifInformation.prototype.gpsProcessingMethod = new String();

/**
 * Date and time information relative to UTC (Universal Time Coordinated) provided by GPS when the photo was taken.
 *
 * @type TZDate
 */
ExifInformation.prototype.gpsTime = new TZDate();

/**
 * User comment.
 *
 * @type String
 */
ExifInformation.prototype.userComment = new String();

/**
 * The Exif API provides interfaces and methods for manipulating data from a JPEG file. The object provides methods to retrieve the object from a JPEG file and save the Exif data from the object in the JPEG file. The object provides functionality to get and set the Exif attributes corresponding to the Exif tag. Changing the value of the attribute in the object stores the Exif data in the object. It does not change data in the JPEG file. For applying the modified Exif data to the JPEG file, the saveExifInfo() method of the object should be called with the object that has the modified Exif data.
 * <p>
For more information about how to use Exif API, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/content_guide/exif.htm">Exif Guide</a>.
        </p>
 *
 * @type ExifManager
 */
ExifManagerObject.prototype.exif = new ExifManager();

/**
 * Called when the Exif information object has been successfully retrieved.
 *
 * @param {ExifInformation} exifInfo
 * @type void
 * @memberOf ExifInformationSuccessCallback
 * @returns {void}
 */
ExifInformationSuccessCallback.prototype.onsuccess = function(exifInfo){ return; };

/**
 * Gets the object to manipulate the Exif data in a JPEG file.
            <p>
This function returns (via callback) the <em>ExifInformation</em> object that contains the Exif data in the JPEG file.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found or the file does not contain Exif data              </li>
              <li>
IOError: If access to the image file is denied due to insufficient permissions              </li>
              <li>
InvalidValuesError: If any input parameter contains invalid values              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {String} uri
 * @param {ExifInformationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.getExifInfo = function(uri, successCallback, errorCallback){ return; };

/**
 * Saves the Exif data of the object into the JPEG file.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found              </li>
              <li>
InvalidValuesError: If any input parameter contains invalid values              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {ExifInformation} exifInfo
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.saveExifInfo = function(exifInfo, successCallback, errorCallback){ return; };

/**
 * Gets the thumbnail of the specified JPEG file. If there is no thumbnail in the JPEG file, is returned.
            <p>
<em>successCallback</em> is invoked with a URI as the first argument.
This URI is a <a href="http://en.wikipedia.org/wiki/Data_URI_scheme">data URI</a>.
It can be used as an src attribute value of the img element.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found              </li>
              <li>
IOError: If access to the thumbnail file is denied due to insufficient permissions              </li>
              <li>
InvalidValuesError: If any of the input parameters contains an invalid value              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {String} uri
 * @param {ExifThumbnailSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.getThumbnail = function(uri, successCallback, errorCallback){ return; };

/**
 * The Exif API provides interfaces and methods for manipulating data from a JPEG file. The object provides methods to retrieve the object from a JPEG file and save the Exif data from the object in the JPEG file. The object provides functionality to get and set the Exif attributes corresponding to the Exif tag. Changing the value of the attribute in the object stores the Exif data in the object. It does not change data in the JPEG file. For applying the modified Exif data to the JPEG file, the saveExifInfo() method of the object should be called with the object that has the modified Exif data.
 * <p>
For more information about how to use Exif API, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/content_guide/exif.htm">Exif Guide</a>.
        </p>
 *
 * @type ExifManager
 */
Tizen.prototype.exif = new ExifManager();

/**
 * The FileStringSuccessCallback callback interface specifies a success callback with a DOMString object as input argument.
          <p>
It is used in asynchronous operations, such as File.readAsText().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStringSuccessCallback}
 */
function FileStringSuccessCallback() {};
FileStringSuccessCallback.prototype = new Object();

/**
 * The FileSystemStorageSuccessCallback callback interface specifies a success callback with a object as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.getStorage() and FileSystemManager.addStorageStateChangeListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageSuccessCallback}
 */
function FileSystemStorageSuccessCallback() {};
FileSystemStorageSuccessCallback.prototype = new Object();

/**
 * The FileSystemManager interface provides access to the Filesystem API.
          <p>
This manager interface exposes the Filesystem base API, and provides functionalities, such
as determining root and default locations, resolving a given location into a file handle, and registering filesystem listeners for filesystem events.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManager}
 */
function FileSystemManager() {};
FileSystemManager.prototype = new Object();

/**
 * The FileStream interface represents a handle to a File opened for read and/or write operations. Read and write operations are performed relative to a position attribute, which is a pointer that represents the current position in the file.
          <p>
A series of read/write methods are available that permit both binary and text to be processed.
          </p>
          <p>
Once a file stream is closed, any operation attempt made on this stream results in a standard JavaScript error.
          </p>
          <p>
The read/write operations in this interface do not throw any security exceptions as the access rights are expected to be granted through the initial resolve() method or through the openStream() method of the <em>File </em>interface. Therefore, all actions performed on a successfully resolved File and FileStream are expected to succeed. This avoids successive asynchronous calls and may potentially increase application for a user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStream}
 */
function FileStream() {};
FileStream.prototype = new Object();

/**
 * The FileSuccessCallback interface defines file system success callback with a object as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.resolve(), copying, moving, and deleting files.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSuccessCallback}
 */
function FileSuccessCallback() {};
FileSuccessCallback.prototype = new Object();

/**
 * The File interface represents the file abstraction in use. A file handle represents a file if the property is , and if the property is , the file handle represents a directory. If a file handle represents a directory, it can address files and directories.
          <p>
The file object permissions for the file object location and tree rooted
at that location depends upon the mode defined in the resolve method.
When a File object creates a child File object,
the new File object inherits its access rights from
the parent object without any reference to the security framework, as
noted in certain methods of File.
          </p>
          <p>
A file handle representing a file can be opened for I/O operations,
such as reading and writing.
          </p>
          <p>
A file handle representing a directory can be used for listing all
files and directories rooted as the file handle location.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {File}
 */
function File() {};
File.prototype = new Object();

/**
 * The FileSystemStorage interface gives additional information about a storage, such as if the device is mounted, if it is a removable drive or not, or the device's name.
          <p>
To retrieve the mount point, the resolve() method should be used using the label as argument.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorage}
 */
function FileSystemStorage() {};
FileSystemStorage.prototype = new Object();

/**
 * The FileSystemManagerObject interface defines what is instantiated by the Tizen object.
          <p>
There is a <em>tizen.filesystem </em>object that allows accessing the functionality of the Filesystem API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManagerObject}
 */
function FileSystemManagerObject() {};
FileSystemManagerObject.prototype = new Object();

/**
 * The FileStreamSuccessCallback interface specifies a success callback with a object as input argument.
          <p>
It is used by asynchronous methods, such as File.openStream().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStreamSuccessCallback}
 */
function FileStreamSuccessCallback() {};
FileStreamSuccessCallback.prototype = new Object();

/**
 * The FileSystemStorageArraySuccessCallback callback interface specifies a success callback with an array of FileSystemStorage objects as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.listStorages().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageArraySuccessCallback}
 */
function FileSystemStorageArraySuccessCallback() {};
FileSystemStorageArraySuccessCallback.prototype = new Object();

/**
 * The FileArraySuccessCallback interface defines file system specific success callback for listing methods.
          <p>
This callback interface specifies a success callback with a function taking an array of <em>File </em>objects as input argument. It is used in asynchronous methods, such as File.listFiles().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileArraySuccessCallback}
 */
function FileArraySuccessCallback() {};
FileArraySuccessCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {String} fileStr
 * @type void
 * @memberOf FileStringSuccessCallback
 * @returns {void}
 */
FileStringSuccessCallback.prototype.onsuccess = function(fileStr){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {FileSystemStorage} storage
 * @type void
 * @memberOf FileSystemStorageSuccessCallback
 * @returns {void}
 */
FileSystemStorageSuccessCallback.prototype.onsuccess = function(storage){ return; };

/**
 * The maximum path length limit for the current platform.
 *
 * @type Number
 */
FileSystemManager.prototype.maxPathLength = new Number();

/**
 * Resolves a location to a file handle after validating it.
            <p>
A location can contain a virtual path like '<var>documents/some_file.txt</var>'
or a file's URI '<var>file:///my_strange_path/some_file.png</var>'.
            </p>
            <p>
The list of root locations that must be supported by a compliant implementation are:
            </p>
            <ul>
              <li>
documents - The default folder in which text documents (such as pdf, doc...) are stored by default in a device. For example, in some platforms it corresponds to the "My Documents" folder.              </li>
              <li>
images - The default folder in which still images, like pictures (in formats including jpg, gif, png, etc.), are stored in the device by default. For example, in some platforms it corresponds to the "My Images" folder.              </li>
              <li>
music - The default folder in which sound clips (in formats including mp3, aac, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Music" folder.              </li>
              <li>
videos - The default folder in which video clips (in formats including avi, mp4, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Videos" folder.              </li>
              <li>
downloads - The default folder in which downloaded files (from sources including browser, e-mail client, etc.) are stored by default in the device. For example, in some platforms it corresponds to the "Downloads" folder.              </li>
              <li>
ringtones: The default folder in which ringtones (such as mp3, etc) are stored in the device.              </li>
              <li>
camera : The default folder in which pictures and videos taken by a device are stored.              </li>
              <li>
wgt-package - The read-only folder to which the content of a widget file is extracted.              </li>
              <li>
wgt-private - The private folder in which a widget stores its information. This folder must be accessible only to the same widget and other widgets or applications must not be able to access the stored information.              </li>
              <li>
wgt-private-tmp - Temporary, the private folder in which a widget can store data that is available during a widget execution cycle. Content of this folder can be removed from this directory when the widget is closed or the Web Runtime is restarted. This folder must be accessible only to the same widget and other widgets or applications must not be able to access it.              </li>
            </ul>
            <p>
The <em>mode </em>parameter specifies whether the resulting <em>File </em>object has read-only access ("r" access), read and write access ("rw" access), append access ("a" access), or write access ("w" access) to the root location containing directory tree.
Permission for the requested access is obtained from the security framework. Once the resulting <em>File </em>object has access, access is inherited by any other <em>File </em>objects that are derived from this instance without any further reference to the security framework, as noted in descriptions of certain methods of <em>File</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.
For example, the mode is "w" for the read-only virtual roots (wgt-package and ringtones).              </li>
              <li>
NotFoundError - If the location input argument does not correspond to a valid location.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} location
 * @param {FileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileMode} mode
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.resolve = function(location, onsuccess, onerror, mode){ return; };

/**
 * Gets information about a storage based on its label.For example: "MyThumbDrive", "InternalFlash".
            <p>
The <em>onsuccess </em>method receives the data structure as an input argument containing additional information about the drive.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If no drive was found with the given label.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.               </li>
            </ul>
           
 *
 * @param {String} label
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.getStorage = function(label, onsuccess, onerror){ return; };

/**
 * Lists the available storages (both internal and external) on a device. The onsuccess method receives a list of the data structures as input argument containing additional information about each drive found. It can get storages that would have a label named as 'internal0', virtual roots (images, documents,...), 'removable1', 'removable2'. 'removable1' label is used to resolve sdcard and 'removable2' label is used to resolve USB host, if supported. The vfat filesystem used to sdcard filesystem widely is not case-sensitive. If you want to handle the file on sdcard, you need to consider case-sensitive filenames are regarded as same name.
            <p>
Labels can differ depending on platform implementation.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileSystemStorageArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.listStorages = function(onsuccess, onerror){ return; };

/**
 * Adds a listener to subscribe to notifications when a change in storage state occurs.
            <p>
The most common usage for this method is to watch for any additions and removals of external storages.
            </p>
            <p>
When executed, it returns a subscription identifier that identifies the watch operation. After returning the identifier, the watch operation is started asynchronously. The onsuccess method will be invoked every time a storage state changes. If the attempt fails, the onerror if present will be invoked with the relevant error type.
            </p>
            <p>
The watch operation must continue until the removeStorageStateChangeListener() method is called with the corresponding subscription identifier.
            </p>
           
 *
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf FileSystemManager
 * @returns {Number}
 */
FileSystemManager.prototype.addStorageStateChangeListener = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Removes a listener to unsubscribe from a storage watch operation.
            <p>
If the <em>watchId </em>argument is valid and corresponds to a subscription already in place, the watch process will be stopped and no further callbacks will be invoked.
Otherwise, the method call has no effect.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.removeStorageStateChangeListener = function(watchId){ return; };

/**
 * The flag indicating whether the current file pointer is at the end of the file.
 * <p>
If set to <var>true</var>, this attribute indicates that the file pointer is at the end of the file.
            </p>
 * <p>
If set to <var>false</var>, this attribute indicates that the file pointer is not at the end of the file and so it is anywhere within the file.
            </p>
 *
 * @type Boolean
 */
FileStream.prototype.eof = new Boolean();

/**
 * The flag indicating the stream position for reads/writes.
 * <p>
The stream position is an offset of bytes from the start of the file stream. When invoking an operation that reads or writes from the stream, the operation will take place from the byte defined by this <em>position </em>attribute. If the read or write operation is successful, the position of the stream is advanced by the number of bytes read or written. If the read/write operation is not successful, the position of the stream is unchanged.
            </p>
 *
 * @type Number
 */
FileStream.prototype.position = new Number();

/**
 * The number of bytes that are available for reading from the stream.
 * <p>
The number of bytes available for reading is the maximum amount of bytes that can be read in the next read operation.
It corresponds to the number of bytes available after the file pointer denoted by the <em>position </em>attribute.
            </p>
 * <p>
<var>-1 </var>if EOF is <var>true</var>.
            </p>
 *
 * @type Number
 */
FileStream.prototype.bytesAvailable = new Number();

/**
 * Closes this FileStream.
            <p>
Flushes any pending buffered writes and closes the File. Always succeeds.
Note that pending writes might not succeed.
            </p>
           
 *
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.close = function(){ return; };

/**
 * Reads the specified number of characters from the position of the file pointer in a FileStream and returns the characters as a string. The resulting string length might be shorter than if EOF is .
 *
 * @param {Number} charCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.read = function(charCount){ var ret = new String(); return ret; };

/**
 * Reads the specified number of bytes from a FileStream.
 *
 * @param {Number} byteCount
 * @type array
 * @memberOf FileStream
 * @returns {array}
 */
FileStream.prototype.readBytes = function(byteCount){ var ret = new array(); return ret; };

/**
 * Reads the specified number of bytes from this FileStream, encoding the result in base64.
 *
 * @param {Number} byteCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.readBase64 = function(byteCount){ var ret = new String(); return ret; };

/**
 * Writes the specified DOMString to a FileStream.
 *
 * @param {String} stringData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.write = function(stringData){ return; };

/**
 * Writes the specified bytes to this FileStream.
 *
 * @param {array} byteData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBytes = function(byteData){ return; };

/**
 * Writes the result to this FileStream after converting the specified base64 DOMString to bytes.
 *
 * @param {String} base64Data
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBase64 = function(base64Data){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {File} file
 * @type void
 * @memberOf FileSuccessCallback
 * @returns {void}
 */
FileSuccessCallback.prototype.onsuccess = function(file){ return; };

/**
 * The parent directory handle.
 * <p>
This attribute is set to<var>null</var> if there is no parent directory. This also implies that this directory represents a root location.
            </p>
 *
 * @type File
 */
File.prototype.parent = new File();

/**
 * The file/directory access state in the filesystem.
 * <p>
This attribute is set to:
            </p>
 * <ul>
 * <li>- if object has read-only access at its location.
 * <li>- if object has write access at its location.
 * </ul>
 * <p>
This attribute represents the actual state of a file or directory in the filesystem. Its value is not affected by the mode used in FileSystemManager.resolve() that was used to create the <em>File </em>object from which this <em>File </em>object was obtained.
            </p>
 *
 * @type Boolean
 */
File.prototype.readOnly = new Boolean();

/**
 * The flag indicating whether it is a file.
 * <p>
This attribute can have the following values:
            </p>
 * <ul>
 * <li>if this handle is a file
 * <li>if this handle is a directory
 * </ul>
 *
 * @type Boolean
 */
File.prototype.isFile = new Boolean();

/**
 * The flag indicating whether it is a directory.
 * <p>
This attribute can have the following values:
            </p>
 * <ul>
 * <li>if this handle is a directory
 * <li>if this handle is a file
 * </ul>
 *
 * @type Boolean
 */
File.prototype.isDirectory = new Boolean();

/**
 * The timestamp when a file is first created in the filesystem.
 * <p>
This timestamp is equivalent to the timestamp when a call to createFile() succeeds.
            </p>
 * <p>
If the platform does not support this attribute, it will
be <var>null</var>.
            </p>
 * <p>
It is unspecified and platform-dependent if the creation
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.created = new Date();

/**
 * The timestamp when the most recent modification is made to a file, usually when the last write operation succeeds.
 * <p>
Opening a file for reading does not change the modification timestamp.
            </p>
 * <p>
If the platform does not support this attribute, it will be <em>null</em>.
            </p>
 * <p>
It is unspecified and platform-dependent if the modified
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.modified = new Date();

/**
 * The path of a file after excluding its file name.
 * <p>
It begins with the name of the root containing the file, followed by the path, including the directory containing the file, but excluding the file name.
            </p>
 * <p>
Except in some special cases of the File representing the root itself, the last
character is always '/'.
            </p>
 * <p>
For example, if a file is located at music/ramones/volume1/RockawayBeach.mp3,
the path is music/ramones/volume1/.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the path is
music/ramones/.
            </p>
 * <p>
For the virtual roots, the path is same as the name of the virtual root.
For example, if the root is music, then the path is music. If the root is documents, then the path is documents.
            </p>
 *
 * @type String
 */
File.prototype.path = new String();

/**
 * The file name after excluding the root name and any path components.
 * <p>
This is the name of this file, excluding the root name and any other path components.
            </p>
 * <p>
For example, if a file is located at
music/ramones/volume1/RockawayBeach.mp3, the <em>name </em> is 'RockawayBeach.mp3'.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the
<em>name </em> is be 'volume1'.
            </p>
 * <p>
For the special case of the root itself, the <em>name </em> is an empty string.
            </p>
 *
 * @type String
 */
File.prototype.name = new String();

/**
 * The full path of a file.
 * <p>
It begins with the name of the root containing the file,
and including the name of the file or directory itself.
            </p>
 * <p>
For instance, if the RockawayBeach.mp3 file is located at music/ramones/volume1/, then the <em>fullPath </em>is music/ramones/volume1/RockawayBeach.mp3.
            </p>
 * <p>
For a directory, if the volume1 directory is located at music/ramones/, then the <em>fullPath </em>is music/ramones/volume1.
            </p>
 * <p>
For the special case of the root itself, if the root is music, then the <em>fullPath </em>is music.
            </p>
 * <p>
The <em>fullPath </em>is always equal to path + name.
            </p>
 *
 * @type String
 */
File.prototype.fullPath = new String();

/**
 * The size of this file, in bytes.
 * <p>
If an attempt to read this attribute for a directory is made, <var>undefined</var> is returned. To retrieve the number of files and directories contained in the directory, use the <em>length </em>attribute.
            </p>
 *
 * @type Number
 */
File.prototype.fileSize = new Number();

/**
 * The number of files and directories contained in a file handle.
 * <p>
If an attempt to read this attribute for a file is made, <var>undefined</var> is returned. To retrieve the size of a file, use the <em>fileSize </em>attribute.
            </p>
 *
 * @type Number
 */
File.prototype.length = new Number();

/**
 * Returns a URI for a file to identify an entry (such as using it as the src attribute on an HTML img element). The URI has no specific expiration, it should be valid at least as long as the file exists.
            <p>
If that URI corresponds to any of the public virtual roots (that is
images, videos, music, documents, and downloads) the URI
must be globally unique and could be used by any widget.
            </p>
            <p>
If that URI corresponds to a file located in any a widget's private areas (such as wgt-package, wgt-private, wgt-private-tmp),
the generated URI must be unique for that file and for the widget making the request (such as including some derived from the widget ID in the URI).
These URIs must not be accessible to other widgets, apart from the one invoking this method.
            </p>
           
 *
 * @type String
 * @memberOf File
 * @returns {String}
 */
File.prototype.toURI = function(){ var ret = new String(); return ret; };

/**
 * Lists all files in a directory.
            <p>
The list of files is passed as a File[] in onsuccess() and contains directories and files. However, the directories "." and ".." must not be returned. Each <em>File </em>object that is part of the array must inherit all the access rights (that is, one of the values in FileMode) from the <em>File </em>object in which this method is invoked.
            </p>
            <p>
If the filter is passed and contains valid values, only those directories and files in the directory that match the filter criteria specified in the <em>FileFilter </em>interface must be returned in the onsuccess() method. If no filter is passed, the filter is <var>null </var>or <var>undefined</var>, or the filter contains invalid values, the implementation must return the full list of files in the directory.
            </p>
            <p>
If the directory does not contain any files or directories, or the filter criteria does not matched with any files or directories, the onsuccess() is invoked with an empty array.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If the operation is launched on a file (not a directory).              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileFilter} filter
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.listFiles = function(onsuccess, onerror, filter){ return; };

/**
 * Opens the file in the given mode supporting a specified encoding.
            <p>
This operation is performed asynchronously. If the file is opened successfully, the onsuccess() method is invoked with a <em>FileStream</em> that can be used for reading and writing the file, depending on the mode. The returned <em>FileStream </em>instance includes a file pointer, which represents the current position in the file. The file pointer, by default, is at the start of the file, except in the case of opening a file in append ("a") mode, in which case the file pointer points to the end of the file.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
IOError - The operation is launched on a directory (not a file), the file is not valid or it does not exist.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileMode} mode
 * @param {FileStreamSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.openStream = function(mode, onsuccess, onerror, encoding){ return; };

/**
 * Reads the content of a file as a DOMString.
            <p>
If the operation is successfully executed, the onsuccess() method is invoked and a DOMString is passed as input parameter that represents the file content in the format determined by the <em>encoding </em>parameter.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
IOError - If the operation is launched on a directory (not a file), the file is not valid, or the file does not exist.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.readAsText = function(onsuccess, onerror, encoding){ return; };

/**
 * Copies (and overwrites if possible and specified) a file or a directory from a specified location to another specified location.
            <p>
The copy of the file or directory identified by the <em>originFilePath </em>parameter must be created in the path passed in the <em>destinationFilePath </em>parameter.
            </p>
            <p>
The file or directory to copy must be under the Directory from which the method is invoked, otherwise the operation must not be performed.
            </p>
            <p>
If the copy is performed successfully, the onsuccess() method is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If the <em>originFilePath </em>does not correspond to a valid file or <em>destinationPath </em>is not a valid path.              </li>
              <li>
IOError - If the file in which the copyTo() method is invoked is a file (and not a directory), <em>originFilePath </em>corresponds to a file or directory in use by another process, <em>overwrite </em>parameter is <var>false</var> and <em>destinationFilePath </em>corresponds to an existing file or directory.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.copyTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Moves (and overwrites if possible and specified) a file or a directory from a specified location to another. This operation is different from instantiating copyTo() and then deleting the original file, as on certain platforms, this operation does not require extra disk space.
            <p>
The file or directory identified by the <em>originFilePath </em>parameter is moved to the path passed in the <em>destinationFilePath </em>parameter.
            </p>
            <p>
The file to move must be under the directory from which the method is invoked, else the operation can not be performed.
            </p>
            <p>
If the file or directory is moved successfully, the onsuccess() method is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If <em>originFilePath </em>does not correspond to a valid file or <em>destinationPath </em>is not a valid path.              </li>
              <li>
IOError - If the <em>File </em>in which the moveTo() method is invoked is a file (not a directory), <em>originFilePath </em>corresponds to a file or directory in use by another process, overwrite parameter is <var>false</var> and <em>destinationFilePath </em>corresponds to an existing file or directory.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.moveTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Creates a new directory.
            <p>
A new directory will be created relative to the current
directory that this operation is performed on. The implementation will attempt to
create all necessary sub-directories specified in the dirPath, as well. The use of "."
or ".." in path components is not supported.
            </p>
            <p>
This operation can only be performed on file handlers that represent a directory (that is, <em>isDirectory</em> == <var>true</var>).
            </p>
            <p>
If the directory is successfully created, it will be returned.
            </p>
            <p>
In case the directory cannot be created, an error must be thrown with the appropriate error type.
            </p>
           
 *
 * @param {String} dirPath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createDirectory = function(dirPath){ var ret = new File(); return ret; };

/**
 * Creates a empty new file in a specified location that is relative to the directory indicated by current object's attribute.
            <p>
The use of "." or ".." in path components is not supported. This operation can only be performed on file handlers that represent a directory (that is, <em>isDirectory </em>== <var>true</var>).
            </p>
            <p>
If the file is successfully created, a file handler must be returned by this method.
            </p>
            <p>
In case the file cannot be created, an error must be thrown with the appropriate error type.
            </p>
           
 *
 * @param {String} relativeFilePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createFile = function(relativeFilePath){ var ret = new File(); return ret; };

/**
 * Resolves an existing file or directory relative to the current directory this operation is performed on, and returns a file handle for it.
            <p>
The filePath is not allowed to contain the "." or ".." directories.
            </p>
            <p>
The encoding of file paths is <a href="http://www.ietf.org/rfc/rfc2279.txt">UTF-8</a>.
            </p>
           
 *
 * @param {String} filePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.resolve = function(filePath){ var ret = new File(); return ret; };

/**
 * Deletes a specified directory and directory tree if specified.
            <p>
This method attempts to asynchronously delete a directory or directory tree under the current directory.
            </p>
            <p>
If the <em>recursive </em>parameter is set to <var>true</var>, all the directories and files under the specified directory must be deleted. If the <em>recursive </em>parameter is set to <var>false</var>, the directory is only deleted if it is empty, otherwise an IOError error type will be passed in onerror().
            </p>
            <p>
If the deletion is performed successfully, the onsuccess() is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError -If the passed directory does not correspond to a valid directory.              </li>
              <li>
IOError - If the <em>File </em>in which the delete method is invoked is a file (and not a directory), the directory is in use by another process or the directory is not empty and <em>recursive </em>argument is <var>false</var>.<br/>This code is also used if a recursive deletion partially fails and any data deleted so far cannot be recovered. This may occur due to the lack of filesystem permissions or if any directories or files are already opened by other processes.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} directoryPath
 * @param {Boolean} recursive
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteDirectory = function(directoryPath, recursive, onsuccess, onerror){ return; };

/**
 * Deletes a specified file.This function attempts to asynchronously delete a file under the current directory.
            <p>
If the deletion is performed successfully, the onsuccess() is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If the file does not correspond to a valid file.              </li>
              <li>
IOError - If the file in which the delete() method is invoked is a file (not a directory), the file is in use by another process, or there is no permission in the file system.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} filePath
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteFile = function(filePath, onsuccess, onerror){ return; };

/**
 * The storage name.
 * <p>
This attribute is used as an input for methods such as getStorage() and also used as <em>location</em> parameter for File.resolve() and FileSystemManager.resolve().
            </p>
 *
 * @type String
 */
FileSystemStorage.prototype.label = new String();

/**
 * The storage type as internal or external.
 *
 * @type FileSystemStorageType
 */
FileSystemStorage.prototype.type = new FileSystemStorageType();

/**
 * The storage state as mounted or not.
 *
 * @type FileSystemStorageState
 */
FileSystemStorage.prototype.state = new FileSystemStorageState();

/**
 * The Filesystem API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual
filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em> where <em>&lt;rootname&gt;</em> is
the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or
directory relative to that root.
        </p>
 * <p>
The following virtual roots must be supported:
        </p>
 * <ul>
 * <li>images - the location for images
 * <li>videos - the location for videos
 * <li>music - the location for sounds
 * <li>documents - the location for documents
 * <li>downloads - the location for downloaded items
 * <li>ringtones - the location for ringtones (read-only location)
 * <li>camera - the location for the pictures and videos taken by a device (supported since Tizen 2.3)
 * <li>wgt-package - the location for widget package which is read-only
 * <li>wgt-private - the location for a widget's private storage
 * <li>wgt-private-tmp - the location for a widget's private volatile storage
 * </ul>
 * <p>
The file URI path is also supported. To access other paths out of virtual root, for example '/tmp/', 'file:///tmp' can be used as location parameter.
        </p>
 * <p>
To access specific locations apart from those specified above, a file handle must be retrieved using the <em>filesystem.resolve() </em>call.
        </p>
 * <p>
A file handle represents either a file or a directory:        </p>
 * <ul>
 * <li>For a file, the attribute is set to .
 * <li>For a directory, the attribute is set to .
 * </ul>
 * <p>
A file can be opened for both read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation must support the use of the following characters in file names:
        </p>
 * <ul>
 * <li>Letters (a-z, A-Z)
 * <li>Numbers (0-9)
 * <li>Blank space
 * <li>Underscore ("_")
 * <li>Hyphen ("-")
 * <li>Period (".")
 * </ul>
 * <p>
The implementation may support additional characters in file names, depending on platform support.
        </p>
 * <p>
The implementation may forbid the use of additional characters in file names, depending on the platform. The use of the path (component) separator "/" should not be allowed in file names.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended to avoid any dependency
on aspects that cannot be supported across multiple platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem, the encoding used for the file path should be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
FileSystemManagerObject.prototype.filesystem = new FileSystemManager();

/**
 * Called when the File.openStream asynchronous call completes successfully.
 *
 * @param {FileStream} filestream
 * @type void
 * @memberOf FileStreamSuccessCallback
 * @returns {void}
 */
FileStreamSuccessCallback.prototype.onsuccess = function(filestream){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} storages
 * @type void
 * @memberOf FileSystemStorageArraySuccessCallback
 * @returns {void}
 */
FileSystemStorageArraySuccessCallback.prototype.onsuccess = function(storages){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} files
 * @type void
 * @memberOf FileArraySuccessCallback
 * @returns {void}
 */
FileArraySuccessCallback.prototype.onsuccess = function(files){ return; };

/**
 * The Filesystem API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual
filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em> where <em>&lt;rootname&gt;</em> is
the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or
directory relative to that root.
        </p>
 * <p>
The following virtual roots must be supported:
        </p>
 * <ul>
 * <li>images - the location for images
 * <li>videos - the location for videos
 * <li>music - the location for sounds
 * <li>documents - the location for documents
 * <li>downloads - the location for downloaded items
 * <li>ringtones - the location for ringtones (read-only location)
 * <li>camera - the location for the pictures and videos taken by a device (supported since Tizen 2.3)
 * <li>wgt-package - the location for widget package which is read-only
 * <li>wgt-private - the location for a widget's private storage
 * <li>wgt-private-tmp - the location for a widget's private volatile storage
 * </ul>
 * <p>
The file URI path is also supported. To access other paths out of virtual root, for example '/tmp/', 'file:///tmp' can be used as location parameter.
        </p>
 * <p>
To access specific locations apart from those specified above, a file handle must be retrieved using the <em>filesystem.resolve() </em>call.
        </p>
 * <p>
A file handle represents either a file or a directory:        </p>
 * <ul>
 * <li>For a file, the attribute is set to .
 * <li>For a directory, the attribute is set to .
 * </ul>
 * <p>
A file can be opened for both read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation must support the use of the following characters in file names:
        </p>
 * <ul>
 * <li>Letters (a-z, A-Z)
 * <li>Numbers (0-9)
 * <li>Blank space
 * <li>Underscore ("_")
 * <li>Hyphen ("-")
 * <li>Period (".")
 * </ul>
 * <p>
The implementation may support additional characters in file names, depending on platform support.
        </p>
 * <p>
The implementation may forbid the use of additional characters in file names, depending on the platform. The use of the path (component) separator "/" should not be allowed in file names.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended to avoid any dependency
on aspects that cannot be supported across multiple platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem, the encoding used for the file path should be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
Tizen.prototype.filesystem = new FileSystemManager();

/**
 * The interface defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
The <em>tizen.messageport</em> object allows access to the functionality of the Message Port API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessagePortManagerObject}
 */
function MessagePortManagerObject() {};
MessagePortManagerObject.prototype = new Object();

/**
 * The MessagePortCallback interface defines notification callbacks for receiving data from other applications.
 *
 * @super Object
 * @constructor
 * @return {MessagePortCallback}
 */
function MessagePortCallback() {};
MessagePortCallback.prototype = new Object();

/**
 * The interface provides methods to send messages.
 *
 * @super Object
 * @constructor
 * @return {RemoteMessagePort}
 */
function RemoteMessagePort() {};
RemoteMessagePort.prototype = new Object();

/**
 * The interface provides methods to receive data.
 *
 * @super Object
 * @constructor
 * @return {LocalMessagePort}
 */
function LocalMessagePort() {};
LocalMessagePort.prototype = new Object();

/**
 * The interface provides methods to request message port to communicate.
 *
 * @super Object
 * @constructor
 * @return {MessagePortManager}
 */
function MessagePortManager() {};
MessagePortManager.prototype = new Object();

/**
 * The MessagePort API provides the functionality for communicating with other applications.
 * <p>
For more information on the MessagePort features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/io_guide/messageport.htm">MessagePort Guide</a>.
        </p>
 *
 * @type MessagePortManager
 */
MessagePortManagerObject.prototype.messageport = new MessagePortManager();

/**
 * Called when data is received from other applications via the specified message port name.
 *
 * @param {array} data
 * @param {RemoteMessagePort} remoteMessagePort
 * @type void
 * @memberOf MessagePortCallback
 * @returns {void}
 */
MessagePortCallback.prototype.onreceived = function(data, remoteMessagePort){ return; };

/**
 * The message port name.
 *
 * @type String
 */
RemoteMessagePort.prototype.messagePortName = new String();

/**
 * The application ID to connect with.
 *
 * @type ApplicationId
 */
RemoteMessagePort.prototype.appId = new ApplicationId();

/**
 * The flag indicating whether the message port is trusted.
 *
 * @type Boolean
 */
RemoteMessagePort.prototype.isTrusted = new Boolean();

/**
 * Sends messages to the specified application.
            <p>
The sent messages will be ignored without any notice, unless the target application added one or more listeners to the target local message port.
            </p>
           
 *
 * @param {array} data
 * @param {LocalMessagePort} localMessagePort
 * @type void
 * @memberOf RemoteMessagePort
 * @returns {void}
 */
RemoteMessagePort.prototype.sendMessage = function(data, localMessagePort){ return; };

/**
 * The name of the message port name.
 *
 * @type String
 */
LocalMessagePort.prototype.messagePortName = new String();

/**
 * The flag indicating whether the message port is trusted.
 *
 * @type Boolean
 */
LocalMessagePort.prototype.isTrusted = new Boolean();

/**
 * Adds a message port listener to receive messages from other applications.
 *
 * @param {MessagePortCallback} listener
 * @type Number
 * @memberOf LocalMessagePort
 * @returns {Number}
 */
LocalMessagePort.prototype.addMessagePortListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the message port listener.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf LocalMessagePort
 * @returns {void}
 */
LocalMessagePort.prototype.removeMessagePortListener = function(watchId){ return; };

/**
 * Requests a LocalMessage Port instance to start receiving message from another application.
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a trusted LocalMessagePort instance to receive message from another application.
            <p>
Trusted local message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestTrustedLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a RemoteMessagePort instance to send message to another application.
            <p>
If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * Requests a trusted RemoteMessagePort instance to receive message from another application.
            <p>
If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
Trusted remote message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestTrustedRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * The MessagePort API provides the functionality for communicating with other applications.
 * <p>
For more information on the MessagePort features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/io_guide/messageport.htm">MessagePort Guide</a>.
        </p>
 *
 * @type MessagePortManager
 */
Tizen.prototype.messageport = new MessagePortManager();

/**
 * This interface invokes the success callback with an array of objects as an input parameter when the installed package list is retrieved.
          <p>
It is used in <em>tizen.package.getPackagesInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageInformationArraySuccessCallback}
 */
function PackageInformationArraySuccessCallback() {};
PackageInformationArraySuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.package </em>object allows access to Package API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageManagerObject}
 */
function PackageManagerObject() {};
PackageManagerObject.prototype = new Object();

/**
 * This callback interface specifies methods that are invoked when a package is installed, updated, or uninstalled.
 *
 * @super Object
 * @constructor
 * @return {PackageInformationEventCallback}
 */
function PackageInformationEventCallback() {};
PackageInformationEventCallback.prototype = new Object();

/**
 * This interface defines the general information available to an installed package.
 *
 * @super Object
 * @constructor
 * @return {PackageInformation}
 */
function PackageInformation() {};
PackageInformation.prototype = new Object();

/**
 * This interface defines the package manager.
 *
 * @super Object
 * @constructor
 * @return {PackageManager}
 */
function PackageManager() {};
PackageManager.prototype = new Object();

/**
 * This callback interface specifies subscriptions for any notification on the progress or completion of requests.
 *
 * @super Object
 * @constructor
 * @return {PackageProgressCallback}
 */
function PackageProgressCallback() {};
PackageProgressCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf PackageInformationArraySuccessCallback
 * @returns {void}
 */
PackageInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application can be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
PackageManagerObject.prototype.package = new PackageManager();

/**
 * Called when a package is installed.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when a package is updated.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when a package is uninstalled.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the identifier of a package.
 *
 * @type PackageId
 */
PackageInformation.prototype.id = new PackageId();

/**
 * An attribute to store the package name.
 *
 * @type String
 */
PackageInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of a package.
 * <p>
The icon path of the package is the same as the icon path of the relevant application
(see the <a href="application.html#ApplicationInformation::iconPath">iconPath</a> attribute of
the <a href="application.html#ApplicationInformation">ApplicationInformation</a> interface).
            </p>
 * <p>
The relevant application is the one with the same
<a href="application.html#ApplicationInformation::packageId">packageId</a> as the
<a href="#PackageInformation::id">id</a> of this package.
            </p>
 *
 * @type String
 */
PackageInformation.prototype.iconPath = new String();

/**
 * An attribute to store the package version.
 *
 * @type String
 */
PackageInformation.prototype.version = new String();

/**
 * An attribute to store the total installed size(package + data) of a package.
 *
 * @type Number
 */
PackageInformation.prototype.totalSize = new Number();

/**
 * An attribute to store the current data size of a package.
 *
 * @type Number
 */
PackageInformation.prototype.dataSize = new Number();

/**
 * An attribute to store the latest installed or updated time of a package.
 *
 * @type Date
 */
PackageInformation.prototype.lastModified = new Date();

/**
 * An attribute to store the author of a package.
 *
 * @type String
 */
PackageInformation.prototype.author = new String();

/**
 * An attribute to store the package description.
 *
 * @type String
 */
PackageInformation.prototype.description = new String();

/**
 * An attribute to store the application ID list of a package.
 *
 * @type array
 */
PackageInformation.prototype.appIds = new array();

/**
 * Installs a package with a specified file on a device.
            <p>
This API provides a way to notify the progress and completion of an installation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found at the specified location.              </li>
              <li>
UnknownError - If it is not allowed to install the package by the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {String} packageFileURI
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.install = function(packageFileURI, progressCallback, errorCallback){ return; };

/**
 * Uninstalls the package with a specified package ID.
            <p>
This API provides a way to notify about the progress and completion of an uninstallation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found with the specified ID.              </li>
              <li>
UnknownError - If it is not allowed to uninstall the package from the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageId} id
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.uninstall = function(id, progressCallback, errorCallback){ return; };

/**
 * Gets information of the installed packages.
            <p>
The result contains the snapshots of the installed packages information.
            </p>
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.getPackagesInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets information of an installed package.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns the package information of the current application.
The list of installed packages and their package IDs is obtained using <em>getPackagesInfo()</em>.
            </p>
           
 *
 * @param {PackageId} id
 * @type PackageInformation
 * @memberOf PackageManager
 * @returns {PackageInformation}
 */
PackageManager.prototype.getPackageInfo = function(id){ var ret = new PackageInformation(); return ret; };

/**
 * Sets a listener to receive notifications for any changes made to the list of installed packages.
            <p>
This method sets a <em>PackageInformationEventCallback</em> type callback that is triggered when a package is installed, removed, or updated.
            </p>
            <p>
The callback lasts until the <em>unsetPackageInfoEventListener()</em> method is called.
            </p>
           
 *
 * @param {PackageInformationEventCallback} eventCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.setPackageInfoEventListener = function(eventCallback){ return; };

/**
 * Unsets the listener to stop receiving package notifications.
 *
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.unsetPackageInfoEventListener = function(){ return; };

/**
 * Called while the request is in progress.
 *
 * @param {PackageId} id
 * @param {Number} progress
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.onprogress = function(id, progress){ return; };

/**
 * Called when the request is completed.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.oncomplete = function(id){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application can be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
Tizen.prototype.package = new PackageManager();

/**
 * This property reflects the information of the device orientation in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceOrientation}
 */
function SystemInfoDeviceOrientation() {};
SystemInfoDeviceOrientation.prototype = new SystemInfoProperty();

/**
 * This property reflects the locale information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoLocale}
 */
function SystemInfoLocale() {};
SystemInfoLocale.prototype = new SystemInfoProperty();

/**
 * This property reflects the video sources the device has.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoVideoSource}
 */
function SystemInfoVideoSource() {};
SystemInfoVideoSource.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBuild}
 */
function SystemInfoBuild() {};
SystemInfoBuild.prototype = new SystemInfoProperty();

/**
 * This property reflects the state of the CPUs available to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCpu}
 */
function SystemInfoCpu() {};
SystemInfoCpu.prototype = new SystemInfoProperty();

/**
 * This property exposes the data storage devices connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorage}
 */
function SystemInfoStorage() {};
SystemInfoStorage.prototype = new SystemInfoProperty();

/**
 * Defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a tizen.systeminfo object that allows accessing the
functionality of the SystemInfo API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoObject}
 */
function SystemInfoObject() {};
SystemInfoObject.prototype = new Object();

/**
 * SystemInfoDeviceCapability object.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceCapability}
 */
function SystemInfoDeviceCapability() {};
SystemInfoDeviceCapability.prototype = new Object();

/**
 * This property reflects the general state of the system's battery
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBattery}
 */
function SystemInfoBattery() {};
SystemInfoBattery.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Wi-Fi network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoWifiNetwork}
 */
function SystemInfoWifiNetwork() {};
SystemInfoWifiNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the peripheral information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPeripheral}
 */
function SystemInfoPeripheral() {};
SystemInfoPeripheral.prototype = new SystemInfoProperty();

/**
 * Systeminfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument.
It is used in asynchronous operations, such as getPropertyValueArray() or addPropertyValueArrayChangeListener()
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertyArraySuccessCallback}
 */
function SystemInfoPropertyArraySuccessCallback() {};
SystemInfoPropertyArraySuccessCallback.prototype = new Object();

/**
 * Systeminfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument.
It is used in asynchronous
operations, such as getPropertyValue() or addPropertyValueChangeListener()
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertySuccessCallback}
 */
function SystemInfoPropertySuccessCallback() {};
SystemInfoPropertySuccessCallback.prototype = new Object();

/**
 * This property reflects the information of the Display.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDisplay}
 */
function SystemInfoDisplay() {};
SystemInfoDisplay.prototype = new SystemInfoProperty();

/**
 * This entry interface queries the information of a system.
          <p>
This API offers methods for retrieving system information
and for subscribing notifications of system information changes.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfo}
 */
function SystemInfo() {};
SystemInfo.prototype = new Object();

/**
 * This property reflects the information of the SIM card information.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoSIM}
 */
function SystemInfoSIM() {};
SystemInfoSIM.prototype = new SystemInfoProperty();

/**
 * This is a common abstract interface used by different types of system information objects.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoProperty}
 */
function SystemInfoProperty() {};
SystemInfoProperty.prototype = new Object();

/**
 * This property represents information about the memory state on the device system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoMemory}
 */
function SystemInfoMemory() {};
SystemInfoMemory.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Cellular network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCellularNetwork}
 */
function SystemInfoCellularNetwork() {};
SystemInfoCellularNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the data network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoNetwork}
 */
function SystemInfoNetwork() {};
SystemInfoNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects each input source the current device has.
          <p>
If there are 2 HDMI inputs on a device, Two <em>SystemInfoVideoSourceInfo</em> objects must be retreived through <em>SystemInfoVideoSource</em><br/>{type=HDMI, number=1}, {type=HDMI, number=2}
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoVideoSourceInfo}
 */
function SystemInfoVideoSourceInfo() {};
SystemInfoVideoSourceInfo.prototype = new Object();

/**
 * This property exposes a single storage device connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorageUnit}
 */
function SystemInfoStorageUnit() {};
SystemInfoStorageUnit.prototype = new SystemInfoProperty();

/**
 * Represents the status of the current device orientation.
 *
 * @type SystemInfoDeviceOrientationStatus
 */
SystemInfoDeviceOrientation.prototype.status = new SystemInfoDeviceOrientationStatus();

/**
 * whether the device is in autorotation.
 *
 * @type Boolean
 */
SystemInfoDeviceOrientation.prototype.isAutoRotation = new Boolean();

/**
 * Indicates the current language setting in the (LANGUAGE)_(REGION) syntax. The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format. The language setting is case-sensitive.
 *
 * @type String
 */
SystemInfoLocale.prototype.language = new String();

/**
 * Indicates the current country setting in the (LANGUAGE)_(REGION) syntax. The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format. The country setting is case-sensitive.
 *
 * @type String
 */
SystemInfoLocale.prototype.country = new String();

/**
 * Represents a list of video sources that a device is connected with.
 *
 * @type array
 */
SystemInfoVideoSource.prototype.connected = new array();

/**
 * Represents a list of video sources that a device is not connected with.
 *
 * @type array
 */
SystemInfoVideoSource.prototype.disconnected = new array();

/**
 * Represents the model name of the current device.
 *
 * @type String
 */
SystemInfoBuild.prototype.model = new String();

/**
 * Represents the manufacturer of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.manufacturer = new String();

/**
 * Represents the build version information of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.buildVersion = new String();

/**
 * An attribute to indicate the current CPU load, as a number between and , representing the minimum and maximum values allowed on this system. Any threshold parameter used in a watch function to monitor this property applies to this attribute.
 *
 * @type Number
 */
SystemInfoCpu.prototype.load = new Number();

/**
 * The array of storage units connected to this device.
 *
 * @type array
 */
SystemInfoStorage.prototype.units = new array();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
        </p>
 * <p>
The following provides an overview of the tree data structure:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>CPU
 * <li>STORAGE
 * <li>DISPLAY
 * <li>DEVICE_ORIENTATION
 * <li>BUILD
 * <li>LOCALE
 * <li>NETWORK
 * <li>WIFI_NETWORK
 * <li>CELLULAR_NETWORK
 * <li>SIM
 * <li>PERIPHERAL
 * <li>VIDEOSOURCE (: 2.3)
 * <li>MEMORY
 * </ul>
 * <p>
Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, <var>CELLULAR_NETWORK</var> and <var>SIM</var> are not available.<br/><br/>To check the available <var>SystemInfoPropertyId</var>, <em>tizen.systeminfo.getCapability()</em> can be used.
        </p>
 * <ul>
 * <li>BATTERY - tizen.systeminfo.getCapability()
 * <li>DISPLAY - tizen.systeminfo.getCapability()
 * <li>WIFI_NETWORK - tizen.systeminfo.getCapability()
 * <li>CELLULAR_NETWORK - tizen.systeminfo.getCapability()
 * <li>SIM - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/battery
 * @type SystemInfo
 */
SystemInfoObject.prototype.systeminfo = new SystemInfo();

/**
 * Indicates whether the device supports Bluetooth.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.bluetooth = new Boolean();

/**
 * Indicates whether the device supports NFC.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfc = new Boolean();

/**
 * Indicates whether the device supports NFC reserved push.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfcReservedPush = new Boolean();

/**
 * The number of point in Multi-point touch.
 *
 * @type Number
 */
SystemInfoDeviceCapability.prototype.multiTouchCount = new Number();

/**
 * Indicates whether the device supports the built-in Keyboard.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboard = new Boolean();

/**
 * Indicates whether the device supports the built-in keyboard layout.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboardLayout = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifi = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi direct.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifiDirect = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.opengles = new Boolean();

/**
 * The device 3DC texture format for OpenGL-ES. One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.openglestextureFormat = new String();

/**
 * Indicates whether the device supports OpenGL-ES version 1.1.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion1_1 = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES version 2.0.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion2_0 = new Boolean();

/**
 * Indicates whether the device supports FM radio.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.fmRadio = new Boolean();

/**
 * The version of the platform in the format. For example, represents a platform version where the major version is and the minor and build versions are .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformVersion = new String();

/**
 * The version of the Web API in the format. For example, represents a web api version where the major version is and the minor version is .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.webApiVersion = new String();

/**
 * The version of the native API in the format.
 * <p>
For example, <var>1.0</var> represents a native api version where the major version is <var>1 </var>and the minor version is <var>0</var>.
If a device doesn't provide Tizen native API, nativeApiVersion will be a empty string.
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.nativeApiVersion = new String();

/**
 * The name of the platform.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformName = new String();

/**
 * Indicates whether the device supports camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.camera = new Boolean();

/**
 * Indicates whether the device supports front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFront = new Boolean();

/**
 * Indicates whether the device supports flash on the front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFrontFlash = new Boolean();

/**
 * Indicates whether the device supports back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBack = new Boolean();

/**
 * Indicates whether the device supports flash on the back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBackFlash = new Boolean();

/**
 * Indicates whether the device supports GPS or not.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.location = new Boolean();

/**
 * Indicates whether the device supports GPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationGps = new Boolean();

/**
 * Indicates whether the device supports WPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationWps = new Boolean();

/**
 * Indicates whether the device supports microphone.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.microphone = new Boolean();

/**
 * Indicates whether the device supports USB host.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbHost = new Boolean();

/**
 * Indicates whether the device supports USB accessory.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbAccessory = new Boolean();

/**
 * Indicates whether the device supports RCA output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputRca = new Boolean();

/**
 * Indicates whether the device supports HDMI output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputHdmi = new Boolean();

/**
 * The device CPU architecture. The possible values for this attribute are: armv6, armv7, x86.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreCpuArch = new String();

/**
 * The device FPU architecture. The possible values for this attribute are: vfpv3 / sse2 / sse3 / ssse3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreFpuArch = new String();

/**
 * Indicates whether the device supports VOIP.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.sipVoip = new Boolean();

/**
 * Indicates the Tizen ID, not device's unique ID since Tizen 2.3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.duid = new String();

/**
 * Indicates whether the device supports speech recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechRecognition = new Boolean();

/**
 * Indicates whether the device supports speech synthesis.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechSynthesis = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometer = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometer = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscope = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscopeWakeup = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometer = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometer = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximity = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximityWakeup = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeter = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeterWakeup = new Boolean();

/**
 * Indicates whether the device supports data encryption.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.dataEncryption = new Boolean();

/**
 * Indicates whether the device supports hardware acceleration for 2D/3D graphics.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.graphicsAcceleration = new Boolean();

/**
 * Indicates whether the device supports push service.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.push = new Boolean();

/**
 * Indicates whether the device supports the telephony feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephony = new Boolean();

/**
 * Indicates whether the device supports the mms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonyMms = new Boolean();

/**
 * Indicates whether the device supports the sms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonySms = new Boolean();

/**
 * Indicates whether the device supports the screen normal size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSizeNormal = new Boolean();

/**
 * Indicates whether the device supports the 480 * 800 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize480_800 = new Boolean();

/**
 * Indicates whether the device supports the 720 * 1280 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize720_1280 = new Boolean();

/**
 * Indicates whether the device supports auto rotation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.autoRotation = new Boolean();

/**
 * Indicates whether the device supports shell app widget(dynamic box).
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.shellAppWidget = new Boolean();

/**
 * Indicates whether the device supports vision image recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionImageRecognition = new Boolean();

/**
 * Indicates whether the device supports vision qrcode generation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeGeneration = new Boolean();

/**
 * Indicates whether the device supports vision qrcode recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeRecognition = new Boolean();

/**
 * Indicates whether the device supports vision face recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionFaceRecognition = new Boolean();

/**
 * Indicates whether the device supports secure element.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.secureElement = new Boolean();

/**
 * Indicates whether the device supports native osp API.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nativeOspCompatible = new Boolean();

/**
 * Represents the profile of the current device.
 *
 * @type SystemInfoProfile
 */
SystemInfoDeviceCapability.prototype.profile = new SystemInfoProfile();

/**
 * An attribute to specify the remaining level of an internal battery, scaled from to :
 * <ul>
 * <li>indicates that the battery level is the lowest and the system is about to enter shutdown mode.
 * <li>indicates that the system's charge is maximum.
 * </ul>
 * <p>
Any threshold parameter used in a watch operation to monitor this property applies to this attribute.
            </p>
 *
 * @type Number
 */
SystemInfoBattery.prototype.level = new Number();

/**
 * Indicates whether the battery source is currently charging.
 *
 * @type Boolean
 */
SystemInfoBattery.prototype.isCharging = new Boolean();

/**
 * Represents the status (ON or OFF) of the Wi-Fi interface.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.status = new String();

/**
 * Represents the SSID of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ssid = new String();

/**
 * Represents the IPv4 address of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipv6Address = new String();

/**
 * Represents the MAC address of the Wi-Fi interface.
 * <p>
It is written in MM:MM:MM:SS:SS:SS format.
            </p>
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.macAddress = new String();

/**
 * This connection's signal strength, as a normalized value between 0 (no signal detected) and 1 (the level is at its maximum value).
 *
 * @type Number
 */
SystemInfoWifiNetwork.prototype.signalStrength = new Number();

/**
 * Represents the video out status.
 *
 * @type Boolean
 */
SystemInfoPeripheral.prototype.isVideoOutputOn = new Boolean();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @param {array} properties
 * @type void
 * @memberOf SystemInfoPropertyArraySuccessCallback
 * @returns {void}
 */
SystemInfoPropertyArraySuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @param {SystemInfoProperty} property
 * @type void
 * @memberOf SystemInfoPropertySuccessCallback
 * @returns {void}
 */
SystemInfoPropertySuccessCallback.prototype.onsuccess = function(property){ return; };

/**
 * The total number of addressable pixels in the horizontal direction of a rectangular entity (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionWidth = new Number();

/**
 * The total number of addressable pixels in the vertical direction of a rectangular element (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionHeight = new Number();

/**
 * Resolution of this device, along its width, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchWidth = new Number();

/**
 * Resolution of this device, along its height, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchHeight = new Number();

/**
 * The display's physical width in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalWidth = new Number();

/**
 * The display's physical height in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalHeight = new Number();

/**
 * The current brightness of a display ranging between to .
 *
 * @type Number
 */
SystemInfoDisplay.prototype.brightness = new Number();

/**
 * Gets the total amount of system memory (in bytes).
 *
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getTotalMemory = function(){ var ret = new Number(); return ret; };

/**
 * Gets the amount of memory that is not in use (in bytes).
 *
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getAvailableMemory = function(){ var ret = new Number(); return ret; };

/**
 * Gets the capabilities of the device.
            <p>
The function must synchronously acquire the capabilities of the device.
            </p>
           
 *
 * @type SystemInfoDeviceCapability
 * @memberOf SystemInfo
 * @returns {SystemInfoDeviceCapability}
 */
SystemInfo.prototype.getCapabilities = function(){ var ret = new SystemInfoDeviceCapability(); return ret; };

/**
 * Gets a device capability related to a given key.
            <p>
See the available <a href="./systeminfo_capability_keys.html">device capability keys</a>.
            </p>
           
 *
 * @param {String} key
 * @type any
 * @memberOf SystemInfo
 * @returns {any}
 */
SystemInfo.prototype.getCapability = function(key){ var ret = new any(); return ret; };

/**
 * Gets the number of system property information provided for a particular system property.
            <p>
That is the length of array retrieved by the getPropertyValueArray() method for the given property.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getCount = function(property){ var ret = new Number(); return ret; };

/**
 * Gets the current value of a specified system property.
            <p>
The function must asynchronously acquire the current value of the requested property. If it is successful,
the successCallback must be invoked with an object containing the information provided by the property.
            </p>
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported. (since Tizen 2.3)              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValue = function(property, successCallback, errorCallback){ return; };

/**
 * Gets the current values of a specified system property.
            <p>
It is recommended that you check if a device provides one or more than one value for a particular system property via getCount().
            </p>
            <p>
If one particular system property is provided on a device, it returns an array containing one SystemInfoProperty object through <em>SystemInfoPropertyArraySuccessCallback</em> method.<br/>If more than one particular system property is provided, multiple SystemInfoProperty objects are returned.
            </p>
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported.              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertyArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValueArray = function(property, successCallback, errorCallback){ return; };

/**
 * Adds a listener to allow tracking of changes in one or more system properties.
            <p>
When called, it immediately returns and then asynchronously starts a watch process defined by the following steps:
            </p>
            <p>
1. Register the successCallback to receive system events that the status of the requested properties may have changed.
            </p>
            <p>
2. When a system event is successfully received invoke the associated successCallback with an object containing the property
values.
            </p>
            <p>
3. Repeat step 2 until removePropertyValueChangeListener function is called.
            </p>
            <p>
There are device properties which are never changed (e.g. "BUILD") and properties which are not changed on some devices
(e.g. "DEVICE_ORIENTATION" in Tizen TV device). The <em>addPropertyValueChangeListener()</em> method accepts
any identifier of these properties, but the listener added for them will not be invoked.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueChangeListener = function(property, successCallback, options, errorCallback){ var ret = new Number(); return ret; };

/**
 * Adds a listener to allow tracking of changes in one or more values of a system property.
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported. (since Tizen 2.3)<br/>For example, monitoring <var>CELLULAR_NETWORK</var> changes is not supported on a device which does not support the telephony feature.
              </li>
            </ul>
            <p>
There are device properties which never change (for example "BUILD") and properties which do not change on the current platform
(for example "DEVICE_ORIENTATION" for some platforms). The <em>addPropertyValueChangeListener()</em> method accepts
any identifier of these properties, but the listener added for them will not be invoked.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertyArraySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueArrayChangeListener = function(property, successCallback, options, errorCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes notifications for property changes.
            <p>
If a valid listenerId argument is passed that corresponds to a subscription
already place, then the watch process MUST immediately terminate and no further
callback is invoked. If the listenerId argument does not correspond to a valid subscription,
the method should return without any further action.
            </p>
           
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.removePropertyValueChangeListener = function(listenerId){ return; };

/**
 * Represents the SIM card state.
 *
 * @type SystemInfoSimState
 */
SystemInfoSIM.prototype.state = new SystemInfoSimState();

/**
 * Represents the Operator Name String (ONS) of Common PCN Handset Specification (CPHS) in SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.operatorName = new String();

/**
 * Represents the SIM card subscriber number.
 *
 * @type String
 */
SystemInfoSIM.prototype.msisdn = new String();

/**
 * Represents the Integrated Circuit Card ID.
 *
 * @type String
 */
SystemInfoSIM.prototype.iccid = new String();

/**
 * Represents the Mobile Country Code (MCC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mcc = new Number();

/**
 * Represents the Mobile Network Code (MNC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mnc = new Number();

/**
 * Represents the Mobile Subscription Identification Number (MSIN) of SIM provider.
 *
 * @type String
 */
SystemInfoSIM.prototype.msin = new String();

/**
 * Represents the Service Provider Name (SPN) of SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.spn = new String();

/**
 * Represents the low memory state.
 *
 * @type SystemInfoLowMemoryStatus
 */
SystemInfoMemory.prototype.status = new SystemInfoLowMemoryStatus();

/**
 * Represents the status (ON or OFF) of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.status = new String();

/**
 * Represents an Access Point Name of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.apn = new String();

/**
 * Represents the IPv4 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipv6Address = new String();

/**
 * Represents Mobile Country Code (MCC) of the cellular network.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mcc = new Number();

/**
 * Represents Mobile Network Code (MNC) of the cellular network. MNC is used in combination with MCC (also known as a "MCC / MNC tuple") to uniquely identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and UMTS public land mobile networks and some satellite mobile networks.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mnc = new Number();

/**
 * Represents Cell Id.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.cellId = new Number();

/**
 * Represents Location Area Code.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.lac = new Number();

/**
 * Whether the connection is set up while the device is roaming.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isRoaming = new Boolean();

/**
 * Indicates whether the device is in flight mode.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isFlightMode = new Boolean();

/**
 * Represents the International Mobile Equipment Identity (IMEI).
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.imei = new String();

/**
 * Represents the network type of the current data network.
 *
 * @type SystemInfoNetworkType
 */
SystemInfoNetwork.prototype.networkType = new SystemInfoNetworkType();

/**
 * Represents the type of the video input source.
 *
 * @type SystemInfoVideoSourceType
 */
SystemInfoVideoSourceInfo.prototype.type = new SystemInfoVideoSourceType();

/**
 * Represents the input number of the input source.
 * <p>
If the source is "HDMI 2", the <em>number</em> is 2.
            </p>
 *
 * @type Number
 */
SystemInfoVideoSourceInfo.prototype.number = new Number();

/**
 * The type of a storage device. The value is one of the constants defined for this type.
 * <p>
The supported storage unit types are:
            </p>
 * <ul>
 * <li>UNKNOWN
 * <li>INTERNAL
 * <li>USB_DEVICE
 * <li>USB_HOST
 * <li>MMC
 * </ul>
 *
 * @type String
 */
SystemInfoStorageUnit.prototype.type = new String();

/**
 * The amount of data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.capacity = new Number();

/**
 * The amount of available data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.availableCapacity = new Number();

/**
 * An attribute to indicate whether a device can be removed or not.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>- If this storage unit can be removed from the system (such as an sdcard unplugged)
 * <li>- If this storage unit cannot be removed from the system
 * </ul>
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemovable = new Boolean();

/**
 * true if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemoveable = new Boolean();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
        </p>
 * <p>
The following provides an overview of the tree data structure:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>CPU
 * <li>STORAGE
 * <li>DISPLAY
 * <li>DEVICE_ORIENTATION
 * <li>BUILD
 * <li>LOCALE
 * <li>NETWORK
 * <li>WIFI_NETWORK
 * <li>CELLULAR_NETWORK
 * <li>SIM
 * <li>PERIPHERAL
 * <li>VIDEOSOURCE (: 2.3)
 * <li>MEMORY
 * </ul>
 * <p>
Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, <var>CELLULAR_NETWORK</var> and <var>SIM</var> are not available.<br/><br/>To check the available <var>SystemInfoPropertyId</var>, <em>tizen.systeminfo.getCapability()</em> can be used.
        </p>
 * <ul>
 * <li>BATTERY - tizen.systeminfo.getCapability()
 * <li>DISPLAY - tizen.systeminfo.getCapability()
 * <li>WIFI_NETWORK - tizen.systeminfo.getCapability()
 * <li>CELLULAR_NETWORK - tizen.systeminfo.getCapability()
 * <li>SIM - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/battery
 * @type SystemInfo
 */
Tizen.prototype.systeminfo = new SystemInfo();

/**
 * The TimeManagerObject interface defines what is instantiated in the tizen object by the Tizen Platform.
          <p>
There will be a <em>tizen.time</em> object that allows accessing the
functionality of the Time API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TimeManagerObject}
 */
function TimeManagerObject() {};
TimeManagerObject.prototype = new Object();

/**
 * The TimeUtil interface that provides access to the time API.
          <p>
This interface offers methods to manage date/time as well as timezones such as:
          </p>
          <ul>
            <li>
Get the current date/time using getCurrentDateTime().            </li>
            <li>
Get timezones using getLocalTimezone() and getAvailableTimezones().            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {TimeUtil}
 */
function TimeUtil() {};
TimeUtil.prototype = new Object();

/**
 * The TZDate interface represents information regarding a given date/time in a predefined timezone. If its date/time exceeds the platform limit, TZDate will be invalid.
 *
 * @super Object
 * @constructor
 * @return {TZDate}
 */
function TZDate() {};
TZDate.prototype = new Object();

/**
 * The TimeDuration interface that contains the length and its associated time unit.
 *
 * @super Object
 * @constructor
 * @return {TimeDuration}
 */
function TimeDuration() {};
TimeDuration.prototype = new Object();

/**
 * The Time API provides information regarding date/time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost.
        </p>
 * <p>
This API can be used to get TZDate objects with full time zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>.
        </p>
 *
 * @type TimeUtil
 */
TimeManagerObject.prototype.time = new TimeUtil();

/**
 * Gets the current date/time.
 *
 * @type TZDate
 * @memberOf TimeUtil
 * @returns {TZDate}
 */
TimeUtil.prototype.getCurrentDateTime = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets the identifier of the local system timezone.
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getLocalTimezone = function(){ var ret = new String(); return ret; };

/**
 * Gets synchronously the identifiers of the timezones supported by the device.
            <p>
Zero or more slashes separate different components of a timezone identifier,
with the most general descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
           
 *
 * @type array
 * @memberOf TimeUtil
 * @returns {array}
 */
TimeUtil.prototype.getAvailableTimezones = function(){ var ret = new array(); return ret; };

/**
 * 
            <p>
Gets the date format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"d" = day number (1 to 31)              </li>
              <li>
"D" = day name              </li>
              <li>
"m" = month number (1 to 12)              </li>
              <li>
"M" = month name              </li>
              <li>
"y" = year              </li>
            </ul>
            <p>
Examples of string formats include: "d/m/y", "y-d-m", "D, M d y".
            </p>
           
 *
 * @param {Boolean} shortformat
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getDateFormat = function(shortformat){ var ret = new String(); return ret; };

/**
 * 
            <p>
Gets the time format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"h" = hours (0 to 23 or 1 to 12 if AM/PM display)              </li>
              <li>
"m" = minutes (0 to 59)              </li>
              <li>
"s" = seconds (0 to 59)              </li>
              <li>
"ap" = AM/PM display              </li>
            </ul>
            <p>
Examples of string formats include: "h:m:s ap", "h:m:s".
            </p>
           
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getTimeFormat = function(){ var ret = new String(); return ret; };

/**
 * Checks whether the given year is a leap year.
 *
 * @param {Number} year
 * @type Boolean
 * @memberOf TimeUtil
 * @returns {Boolean}
 */
TimeUtil.prototype.isLeapYear = function(year){ var ret = new Boolean(); return ret; };

/**
 * Sets a listener to receive notification of changes to the time/date on a device.
            <p>
Listener set with <em>setTimezoneChangeListener()</em> method is called when device time was set by the user. <br/>            </p>
           
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setDateTimeChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notification of changes to the time/date on a device.
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetDateTimeChangeListener = function(){ return; };

/**
 * Sets a listener to receive notification of changes to the time zone on a device.
            <p>
Listener set with <em>setTimezoneChangeListener()</em> method is called when device time zone has changed.
            </p>
           
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setTimezoneChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notification of changes to the time zone on a device.
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetTimezoneChangeListener = function(){ return; };

/**
 * Gets the day of the month (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month (from 1-31).
            <p>
If it tries to set the day bigger than the last day of the month or smaller than 1, it will be calculated automatically.
For example, if TZDate's month is May and parameter is 32, it will be June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setDate = function(date){ return; };

/**
 * Gets the day of the week (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDay = function(){ var ret = new Number(); return ret; };

/**
 * Gets the year.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setFullYear = function(year){ return; };

/**
 * Gets the hour (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour (0-23).
            <p>
If it tries to set the hour bigger than 23 or smaller than 0, it will be calculated automatically.
For example, if hours is 24, it will set 0 and add to a date.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setHours = function(hours){ return; };

/**
 * Gets the milliseconds (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds (from 0-999).
            <p>
If it tries to set the millisecond bigger than 999 or smaller than 0, it will be calculated automatically.
For example, if ms is 1000, it will set 0 and add to a second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMilliseconds = function(ms){ return; };

/**
 * Gets the minutes (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes.
            <p>
If it tries to set the minute bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if minutes is 60, it will set 0 and add to an hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMinutes = function(minutes){ return; };

/**
 * Gets the month (from 0-11).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month (from 0-11).
            <p>
If it tries to set the month bigger than 11 or smaller than 0, it will be calculated automatically.
For example, if month is 12, it will set 0 and add to a year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMonth = function(month){ return; };

/**
 * Gets the seconds (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds (from 0-59).
            <p>
If it tries to set the second bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if seconds is 60, it will set 0 and add to a minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setSeconds = function(seconds){ return; };

/**
 * Gets the day of the month, according to universal time (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month, according to universal time (from 1-31).
            <p>
If it tries to set the day bigger than the last day of the month or smaller than 1, it will be calculated automatically.
For example, if TZDate's month is May and date is 32, it will be June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCDate = function(date){ return; };

/**
 * Gets the day of the week, according to universal time (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDay = function(){ var ret = new Number(); return ret; };

/**
 * Gets the year, according to universal time.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year, according to universal time.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCFullYear = function(year){ return; };

/**
 * Gets the hour, according to universal time (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour, according to universal time (0-23).
            <p>
If it tries to set the hour bigger than 23 or smaller than 0, it will be calculated automatically.
For example, if hours is 24, it will set 0 and add to a date.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCHours = function(hours){ return; };

/**
 * Gets the milliseconds, according to universal time (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds, according to universal time (from 0-999).
            <p>
If it tries to set the millisecond bigger than 999 or smaller than 0, it will be calculated automatically.
For example, if ms is 1000, it will set 0 and add to a second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMilliseconds = function(ms){ return; };

/**
 * Gets the minutes, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes, according to universal time (from 0-59).
            <p>
If it tries to set the minute bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if minutes is 60, it will set 0 and add to an hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMinutes = function(minutes){ return; };

/**
 * Gets the month, according to universal time (from 0-11).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month, according to universal time (from 0-11).
            <p>
If it tries to set the month bigger than 11 or smaller than 0, it will be calculated automatically.
For example, if month is 12, it will set 0 and add to a year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMonth = function(month){ return; };

/**
 * Gets the seconds, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds, according to universal time (from 0-59).
            <p>
If it tries to set the second bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if seconds is 60, it will set 0 and add to a minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCSeconds = function(seconds){ return; };

/**
 * Gets the timezone identifier.
            <p>
Zero or more slashes separate different components, with the most general
descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
            <p>
This attribute uniquely identifies the timezone.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezone = function(){ var ret = new String(); return ret; };

/**
 * Gets a copy of the TZDate converted to a given time zone.
 *
 * @param {String} tzid
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toTimezone = function(tzid){ var ret = new TZDate(); return ret; };

/**
 * Gets a copy of the TZDate converted to the local time zone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toLocalTimezone = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets a copy of the TZDate converted to Coordinated Universal Time (UTC).
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toUTC = function(){ var ret = new TZDate(); return ret; };

/**
 * Calculates the difference with another TZDate object.
            <p>
Calculates the difference in time between <em>this</em> and the other object.
This comparison method takes timezones into consideration for the comparison.
            </p>
            <p>
The TimeDuration that is returned is effectively <em>this</em> - other.
The return value is a duration in milliseconds both TZDate objects have a time component, in days, otherwise.
The result value will be:
            </p>
            <ul>
              <li>
Negative, if other is in the future              </li>
              <li>
0 if the two date/times are equal              </li>
              <li>
Positive, if other is in the past              </li>
            </ul>
           
 *
 * @param {TZDate} other
 * @type TimeDuration
 * @memberOf TZDate
 * @returns {TimeDuration}
 */
TZDate.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks whether the TZDate is equal to another.
            <p>
This method takes the timezones into consideration and will return <em>true</em>if the two TZDate objects represent the same instant in different timezones.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TZDate is earlier than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.earlierThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TZDate is later than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.laterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Gets a new date by adding a duration to the current TZDate object.
            <p>
If the length of duration is negative, the new date/time will be
earlier than it used to.
            </p>
            <p>
Note that calling this method does not alter the current object.
            </p>
           
 *
 * @param {TimeDuration} duration
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.addDuration = function(duration){ var ret = new TZDate(); return ret; };

/**
 * Gets the date portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleDateString = function(){ var ret = new String(); return ret; };

/**
 * Gets the time portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleString = function(){ var ret = new String(); return ret; };

/**
 * Gets the date portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toDateString = function(){ var ret = new String(); return ret; };

/**
 * Gets the time portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toString = function(){ var ret = new String(); return ret; };

/**
 * Determines the time zone abbreviation to be used at a particular date in the time zone.
            <p>
For example, in Toronto this is currently "EST" during the winter months and "EDT" during the
summer months when daylight savings time is in effect.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezoneAbbreviation = function(){ var ret = new String(); return ret; };

/**
 * Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
            <p>
Returns the offset (in seconds) from UTC of the timezone, accounting for daylight
savings if it is in the timezone. For example, if time zone is GMT+8, it will return -32,400.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.secondsFromUTC = function(){ var ret = new Number(); return ret; };

/**
 * Checks whether Daylight Saving Time(DST) is active for this TZDate.
            <p>
Indicates if daylight savings are in effect for the time zone and instant
identified by the TZDate object.
            </p>
           
 *
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.isDST = function(){ var ret = new Boolean(); return ret; };

/**
 * Gets the date of the previous daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getPreviousDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets the date of the next daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getNextDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * The duration length.
 * <p>
The unit of the duration length (milliseconds, seconds, minutes, hours, or days)
is determined by the duration unit attribute.
            </p>
 *
 * @type Number
 */
TimeDuration.prototype.length = new Number();

/**
 * The duration unit (milliseconds, seconds, minutes, hours, or days).
 * <p>
The default value is "MSECS" (milliseconds unit).
            </p>
 *
 * @type TimeDurationUnit
 */
TimeDuration.prototype.unit = new TimeDurationUnit();

/**
 * Calculates the difference between two TimeDuration objects.
            <p>
Calculates the difference in time between <em>this</em> and <em>other</em>.
The TimeDuration that is returned is effectively <em>first</em> - <em>other</em> (that is: positive if the first parameter is larger).
            </p>
            <p>
The returned TimeDuration is the biggest possible unit without losing the precision.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type TimeDuration
 * @memberOf TimeDuration
 * @returns {TimeDuration}
 */
TimeDuration.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks whether the TimeDuration is equal to another.
            <p>
This method takes the units into consideration and will return true
if the two TimeDuration objects represent the same duration in different units.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TimeDuration is lower than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.lessThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TimeDuration is greater than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.greaterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * The Time API provides information regarding date/time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost.
        </p>
 * <p>
This API can be used to get TZDate objects with full time zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>.
        </p>
 *
 * @type TimeUtil
 */
Tizen.prototype.time = new TimeUtil();

/**
 * represents a set of filters.
          <p>
The composite filters can be one of the following 2 types:
          </p>
          <ul>
            <li>
The union - used to filter objects that match any of the filters it includes.            </li>
            <li>
The intersection - used to filter objects that match all the filters it includes.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {CompositeFilter}
 */
function CompositeFilter() {};
CompositeFilter.prototype = new AbstractFilter();

/**
 * This interface is used in methods that require only an error as an input parameter in the error callback.
          <p>
If an invalid function (such as null) is passed to the API that accepts ErrorCallback,
it silently fails and there is no further action.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * Generic exception interface.
          <p>
This interface will be used by the APIs to throw errors synchronously.
          </p>
          <p>
The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIException}
 */
function WebAPIException() {};
WebAPIException.prototype = new Object();

/**
 * represents a filter based on an object attribute which has values that are within a particular range.
          <p>
Range filters, where only one boundary is set, are available.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeRangeFilter}
 */
function AttributeRangeFilter() {};
AttributeRangeFilter.prototype = new AbstractFilter();

/**
 * represents a point (latitude and longitude) in the map coordinate system.
          <p>
Latitude and longitude are of the WGS84 datum.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SimpleCoordinates}
 */
function SimpleCoordinates() {};
SimpleCoordinates.prototype = new Object();

/**
 * This interface represents a set of filters.
          <p>
It represents the query statement for the specified value of <em>matchValue</em> by the rule of <em>matchFlag</em>.
          </p>
          <p>
If no <em>matchValue</em> is defined, the filter matches all objects that have the attribute
defined (same as the "EXISTS" filter works), otherwise, it only matches objects which have an attribute that match
the specified value.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeFilter}
 */
function AttributeFilter() {};
AttributeFilter.prototype = new AbstractFilter();

/**
 * Generic error interface.
          <p>
This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIError}
 */
function WebAPIError() {};
WebAPIError.prototype = new Object();

/**
 * This interface is used in methods that do not require any return value in the success callback.
          <p>
In case of successful execution of an asynchronous call, <em>SuccessCallback</em> or an API defined callback must be called immediately to notify the user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * Defines the tizen interface as a part of the window global object.
          <p>
The <em>Tizen</em> interface is always available within the <em>Window </em>object in the ECMAScript hierarchy.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TizenObject}
 */
function TizenObject() {};
TizenObject.prototype = new Object();

/**
 * The root of the Tizen Web Device API.
          <p>
This is the Tizen root interface.
It is a property of the ECMAScript global object, as specified by the <em>TizenObject</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Tizen}
 */
function Tizen() {};
Tizen.prototype = new Object();

/**
 * This is a common interface used by different types of object filters.
          <p>
Never use this base interface directly, instead use <em>AbstractFilter</em> subtypes,
such as <em>AttributeFilter</em>, <em>AttributeRangeFilter</em>, and <em>CompositeFilter</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AbstractFilter}
 */
function AbstractFilter() {};
AbstractFilter.prototype = new Object();

/**
 * is a common interface used for sorting of queried data.
          <p>
Note that the sorting result of list type attributes is not determined.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SortMode}
 */
function SortMode() {};
SortMode.prototype = new Object();

/**
 * The composite filter type.
 *
 * @type CompositeFilterType
 */
CompositeFilter.prototype.type = new CompositeFilterType();

/**
 * The list of filters in the composite filter.
 *
 * @type array
 */
CompositeFilter.prototype.filters = new array();

/**
 * Method that is invoked when an error occurs.
 *
 * @param {WebAPIError} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * The index is not in the allowed range.
 *
 * @type Number
 */
WebAPIException.INDEX_SIZE_ERR = new Number();

/**
 * The specified range of text is too large.
 *
 * @type Number
 */
WebAPIException.DOMSTRING_SIZE_ERR = new Number();

/**
 * The operation would yield an incorrect node tree.
 *
 * @type Number
 */
WebAPIException.HIERARCHY_REQUEST_ERR = new Number();

/**
 * The object is in the wrong document.
 *
 * @type Number
 */
WebAPIException.WRONG_DOCUMENT_ERR = new Number();

/**
 * The string contains invalid characters.
 *
 * @type Number
 */
WebAPIException.INVALID_CHARACTER_ERR = new Number();

/**
 * Data is specified for a node that does not support data.
 *
 * @type Number
 */
WebAPIException.NO_DATA_ALLOWED_ERR = new Number();

/**
 * The object cannot be modified.
 *
 * @type Number
 */
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * The object cannot be found here.
 *
 * @type Number
 */
WebAPIException.NOT_FOUND_ERR = new Number();

/**
 * The operation is not supported.
 *
 * @type Number
 */
WebAPIException.NOT_SUPPORTED_ERR = new Number();

/**
 * The specified attribute is already in use elsewhere.
 *
 * @type Number
 */
WebAPIException.INUSE_ATTRIBUTE_ERR = new Number();

/**
 * The object is in an invalid state.
 *
 * @type Number
 */
WebAPIException.INVALID_STATE_ERR = new Number();

/**
 * The string did not match the expected pattern.
 *
 * @type Number
 */
WebAPIException.SYNTAX_ERR = new Number();

/**
 * The object cannot be modified in this way.
 *
 * @type Number
 */
WebAPIException.INVALID_MODIFICATION_ERR = new Number();

/**
 * The operation is not allowed by Namespaces in XML.
 *
 * @type Number
 */
WebAPIException.NAMESPACE_ERR = new Number();

/**
 * The object does not support the operation or argument.
 *
 * @type Number
 */
WebAPIException.INVALID_ACCESS_ERR = new Number();

/**
 * The operation would cause the node to fail validation.
 *
 * @type Number
 */
WebAPIException.VALIDATION_ERR = new Number();

/**
 * The type of the object does not match the expected type.
 *
 * @type Number
 */
WebAPIException.TYPE_MISMATCH_ERR = new Number();

/**
 * The operation is insecure.
 *
 * @type Number
 */
WebAPIException.SECURITY_ERR = new Number();

/**
 * A network error occurred.
 *
 * @type Number
 */
WebAPIException.NETWORK_ERR = new Number();

/**
 * The operation has been aborted.
 *
 * @type Number
 */
WebAPIException.ABORT_ERR = new Number();

/**
 * The given URL does not match another URL.
 *
 * @type Number
 */
WebAPIException.URL_MISMATCH_ERR = new Number();

/**
 * The quota has been exceeded.
 *
 * @type Number
 */
WebAPIException.QUOTA_EXCEEDED_ERR = new Number();

/**
 * The operation has timed out.
 *
 * @type Number
 */
WebAPIException.TIMEOUT_ERR = new Number();

/**
 * The supplied node is incorrect or has an incorrect ancestor for this operation.
 *
 * @type Number
 */
WebAPIException.INVALID_NODE_TYPE_ERR = new Number();

/**
 * The object cannot be cloned.
 *
 * @type Number
 */
WebAPIException.DATA_CLONE_ERR = new Number();

/**
 * 16-bit error code.
 * <p>
For the possible values of this attribute, see <a href="http://www.w3.ohttp://127.0.0.1:57746/help/topic/dom/#domexception">DOMException</a>.
            </p>
 *
 * @type Number
 */
WebAPIException.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it had been initialized with.
 * <p>
This attribute can have one of the following values:
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values of this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:57746/help/topic/dom/#error-names-0">DOM error names</a>            </p>
 *
 * @type String
 */
WebAPIException.prototype.name = new String();

/**
 * An error message that describes the details of an encountered error.
 * <p>
This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
            </p>
 *
 * @type String
 */
WebAPIException.prototype.message = new String();

/**
 * The name of the object attribute used for filtering.
 * <p>
The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
(such as 'geolocation.latitude' to filter a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeRangeFilter.prototype.attributeName = new String();

/**
 * Objects with an attribute that is greater than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.initialValue = new any();

/**
 * Objects with an attribute that is strictly lower than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.endValue = new any();

/**
 * Latitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.latitude = new Number();

/**
 * Longitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.longitude = new Number();

/**
 * The name of the object attribute used for filtering.
 * <p>
This is the name of the object attribute exactly as it is defined in
the object's interface. For attributes of complex type, use fully-qualified names
(such as 'geolocation.latitude' to filter a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of an array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeFilter.prototype.attributeName = new String();

/**
 * The match flag used for attribute-based filtering.
 * <p>
By default, this attribute is set to "EXACTLY".
            </p>
 *
 * @type FilterMatchFlag
 */
AttributeFilter.prototype.matchFlag = new FilterMatchFlag();

/**
 * The value used for matching.
 * <p>
The filter will match if the attribute value matches the given matchValue.
            </p>
 * <p>
This value is not used if the <em>matchFlag</em> is set to "EXISTS".
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeFilter.prototype.matchValue = new any();

/**
 * 16-bit error code.
 * <p>
Possible values are defined in <a href="http://www.w3.ohttp://127.0.0.1:57746/help/topic/dom/#domexception">DOMException</a>.
            </p>
 *
 * @type Number
 */
WebAPIError.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it had been initialized with.
 * <p>
This attribute can have one of the following values:
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values of this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:57746/help/topic/dom/#error-names-0">DOM error names</a>            </p>
 *
 * @type String
 */
WebAPIError.prototype.name = new String();

/**
 * An error message that describes the details of the error encountered.
 * <p>
This attribute is not intended to be used directly in the user interfaces
as it is mainly intended to be useful for developers rather than end users.
            </p>
 *
 * @type String
 */
WebAPIError.prototype.message = new String();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in the Tizen Web Device API.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that give information of the platform's error and
filter interfaces that are used to make query statements for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
TizenObject.prototype.tizen = new Tizen();

/**
 * The name of the object attribute used for sorting.
 *
 * @type String
 */
SortMode.prototype.attributeName = new String();

/**
 * The type of the sorting.
 * <p>
By default, this attribute is set to <var>ASC</var>.
            </p>
 *
 * @type SortModeOrder
 */
SortMode.prototype.order = new SortModeOrder();

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in the Tizen Web Device API.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that give information of the platform's error and
filter interfaces that are used to make query statements for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
Window.prototype.tizen = new Tizen();

/**
 * This interface defines a volume change callback for getting notified information about the volume changes.
 *
 * @super Object
 * @constructor
 * @return {VolumeChangeCallback}
 */
function VolumeChangeCallback() {};
VolumeChangeCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object.
          <p>
There will be a <em>tizen.tvaudiocontrol </em>object that allows the access to the
Audio Control API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AudioControlManagerObject}
 */
function AudioControlManagerObject() {};
AudioControlManagerObject.prototype = new Object();

/**
 * This interface provides access to the API funtionalities through the interface.
 *
 * @super Object
 * @constructor
 * @return {AudioControlManager}
 */
function AudioControlManager() {};
AudioControlManager.prototype = new Object();

/**
 * The method invoked when the volume has been changed.
 *
 * @param {Number} volume
 * @type void
 * @memberOf VolumeChangeCallback
 * @returns {void}
 */
VolumeChangeCallback.prototype.onchanged = function(volume){ return; };

/**
 * 
 * <p>
This API provides the audio control features (such as volume and mute) on the TV associated device.
There will be a <em>tizen.tvaudiocontrol</em> object that allows access to the functionality of the TV Audio Control API.
        </p>
 *
 * @feature http://tizen.org/feature/tv.audio
 * @type AudioControlManager
 */
AudioControlManagerObject.prototype.tvaudiocontrol = new AudioControlManager();

/**
 * Turns on or off the silent mode
            <p>
Note that turning on mute mode does not change volume level but
it simply disables any sound. Turning off the mute will enable sound
with the volume level. If setVolumeUp or setVolumeDown functions
are used, then mute is disabled.
            </p>
           
 *
 * @param {Boolean} mute
 * @type void
 * @memberOf AudioControlManager
 * @returns {void}
 */
AudioControlManager.prototype.setMute = function(mute){ return; };

/**
 * Gets the mute state.
 *
 * @type Boolean
 * @memberOf AudioControlManager
 * @returns {Boolean}
 */
AudioControlManager.prototype.isMute = function(){ var ret = new Boolean(); return ret; };

/**
 * Changes the volume level.
            <p>
The value of <em>volume</em> is allowed from 0 to 100. If an invalid value is passed, <em>InvalidValuesError</em> will occur.
            </p>
           
 *
 * @param {Number} volume
 * @type void
 * @memberOf AudioControlManager
 * @returns {void}
 */
AudioControlManager.prototype.setVolume = function(volume){ return; };

/**
 * Increases the volume by 1 level. If it is called when the volume level is 100, it will be ignored because the maximum volume level is 100. If mute is enabled, then execution of this functions will disable it.
 *
 * @type void
 * @memberOf AudioControlManager
 * @returns {void}
 */
AudioControlManager.prototype.setVolumeUp = function(){ return; };

/**
 * Decreases the volume by 1 level.
            <p>
If it is called when the volume level is 0, it will be
ignored because the minimum volume level is 0. If mute is enabled,
then execution of this functions will disable it.
            </p>
           
 *
 * @type void
 * @memberOf AudioControlManager
 * @returns {void}
 */
AudioControlManager.prototype.setVolumeDown = function(){ return; };

/**
 * Gets the current volume level.
 *
 * @type Number
 * @memberOf AudioControlManager
 * @returns {Number}
 */
AudioControlManager.prototype.getVolume = function(){ var ret = new Number(); return ret; };

/**
 * Registers a volume change callback for getting notified when TV volume has been changed.
            <p>
Note that this method overwrites the previously registered listener.
            </p>
           
 *
 * @param {VolumeChangeCallback} callback
 * @type void
 * @memberOf AudioControlManager
 * @returns {void}
 */
AudioControlManager.prototype.setVolumeChangeListener = function(callback){ return; };

/**
 * Unregisters the volume change callback for detecting the volume changes.
 *
 * @type void
 * @memberOf AudioControlManager
 * @returns {void}
 */
AudioControlManager.prototype.unsetVolumeChangeListener = function(){ return; };

/**
 * Gets the current audio output mode.
 *
 * @type AudioOutputMode
 * @memberOf AudioControlManager
 * @returns {AudioOutputMode}
 */
AudioControlManager.prototype.getOutputMode = function(){ var ret = new AudioOutputMode(); return ret; };

/**
 * Plays the sound of a specific beep.
 *
 * @param {AudioBeepType} type
 * @type void
 * @memberOf AudioControlManager
 * @returns {void}
 */
AudioControlManager.prototype.playSound = function(type){ return; };

/**
 * 
 * <p>
This API provides the audio control features (such as volume and mute) on the TV associated device.
There will be a <em>tizen.tvaudiocontrol</em> object that allows access to the functionality of the TV Audio Control API.
        </p>
 *
 * @feature http://tizen.org/feature/tv.audio
 * @type AudioControlManager
 */
Tizen.prototype.tvaudiocontrol = new AudioControlManager();

/**
 * This interface defines what is instantiated by the object.
          <p>
There will be a <em>tizen.tvchannel</em> object that allows access to the
functionality of the channel module.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TVChannelManager}
 */
function TVChannelManager() {};
TVChannelManager.prototype = new Object();

/**
 * This interface invokes the success callback that is invoked when the list of TV program informations is successfully retrieved.
 *
 * @super Object
 * @constructor
 * @return {ProgramListSuccessCallback}
 */
function ProgramListSuccessCallback() {};
ProgramListSuccessCallback.prototype = new Object();

/**
 * The interface defines a channel change callback for getting notified information about the channel changes.
 *
 * @super Object
 * @constructor
 * @return {ChannelChangeCallback}
 */
function ChannelChangeCallback() {};
ChannelChangeCallback.prototype = new Object();

/**
 * This interface provides access to the API functionalities through the interface.
 *
 * @super Object
 * @constructor
 * @return {ChannelManager}
 */
function ChannelManager() {};
ChannelManager.prototype = new Object();

/**
 * This interface represents the object for identifying a TV channel.
 *
 * @super Object
 * @constructor
 * @return {ChannelInfo}
 */
function ChannelInfo() {};
ChannelInfo.prototype = new Object();

/**
 * The interface invokes the success callback that is invoked when all available channels are searched.
 *
 * @super Object
 * @constructor
 * @return {FindChannelSuccessCallback}
 */
function FindChannelSuccessCallback() {};
FindChannelSuccessCallback.prototype = new Object();

/**
 * This interface represents information about the television program.
 *
 * @super Object
 * @constructor
 * @return {ProgramInfo}
 */
function ProgramInfo() {};
ProgramInfo.prototype = new Object();

/**
 * This interface invokes the callback that is invoked when the tuning has been completed.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 <em>onsuccess()</em> - Invoked when the tuning operation has been successfully done and there is a TV signal.            </li>
            <li>
 <em>onnosignal()</em> - Invoked when the tuning operation has been successfully done but there is no signal on the switched channel.            </li>
            <li>
 <em>onprograminforeceived()</em> - Invoked when information about the current program is available after the tune operation.            </li>
          </ul>
          <p>
All these callback methods can be invoked by <b>tizen.tvchannel.tune(), tuneUp() or tuneDown()</b>.
          </p>
          <p>
If there is a TV signal, <b>onsuccess()</b> will be invoked first, and then <b>onprograminforeceived()</b> will be invoked
if information about TV program exists.
But on the other hand, if there is no TV signal, <b>onnosignal()</b> will be invoked.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TuneCallback}
 */
function TuneCallback() {};
TuneCallback.prototype = new Object();

/**
 * 
 * <p>
The TV Channel API provides the control of channel change and
a way to get information about the television program for supporting an Electronic Program Guide(EPG) or Interactive Program Guide(IPG).
Using this API, TV watchers can get continuously updated EPG information about the current and upcoming TV programs on all available channels.
        </p>
 * <p>
Regarding tuning operation, there are some common behaviors.
        </p>
 * <ul>
 * <li>will be invoked if there is no channel corresponding to the request
 * </ul>
 *
 * @feature http://tizen.org/feature/tv.tuner
 * @type ChannelManager
 */
TVChannelManager.prototype.tvchannel = new ChannelManager();

/**
 * The method invoked when the list of TV program informations is retrieved.
 *
 * @param {array} programInfos
 * @type void
 * @memberOf ProgramListSuccessCallback
 * @returns {void}
 */
ProgramListSuccessCallback.prototype.onsuccess = function(programInfos){ return; };

/**
 * Method invoked when the channel has been changed.
 *
 * @param {ChannelInfo} channelInfo
 * @param {WindowType} type
 * @type void
 * @memberOf ChannelChangeCallback
 * @returns {void}
 */
ChannelChangeCallback.prototype.onchanged = function(channelInfo, type){ return; };

/**
 * Tunes the specified channel.
            <p>
If there are more than one channel with the major and minor, the lowest channel in all possible channels will be switched to.
            </p>
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotFoundError - Failed to find a requested channel              </li>
              <li>
 UnknownError - Failed to set the selected channel              </li>
              <li>
 UnknownError - onprograminforeceived for other tune              </li>
            </ul>
           
 *
 * @param {TuneOption} tuneOption
 * @param {TuneCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {WindowType} type
 * @type void
 * @memberOf ChannelManager
 * @returns {void}
 */
ChannelManager.prototype.tune = function(tuneOption, successCallback, errorCallback, type){ return; };

/**
 * Changes channel up.
            <p>
When you call this api on the highest channel, the lowest channel would be tuned.
            </p>
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotFoundError - Failed to find the next higher channel (e.g. When there is no channels in <var>favorites</var> list, you call <var>tuneUp()</var> with <var>'FAVORITE'</var> tune mode.)               </li>
              <li>
 UnknownError - Failed to change to the next higher channel              </li>
              <li>
 UnknownError - onprograminforeceived for other tune              </li>
            </ul>
           
 *
 * @param {TuneCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {TuneMode} tuneMode
 * @param {WindowType} type
 * @type void
 * @memberOf ChannelManager
 * @returns {void}
 */
ChannelManager.prototype.tuneUp = function(successCallback, errorCallback, tuneMode, type){ return; };

/**
 * Changes channel down.
            <p>
When you call this api on the lowest channel, the highest channel would be tuned.
            </p>
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotFoundError - Failed to find the next lower channel (e.g. When there is no channels in <var>favorites</var> list, you call <var>tuneDown()</var> with <var>'FAVORITE'</var> tune mode.)               </li>
              <li>
 UnknownError - Failed to change to the next lower channel              </li>
              <li>
 UnknownError - onprograminforeceived for other tune              </li>
            </ul>
           
 *
 * @param {TuneCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {TuneMode} tuneMode
 * @param {WindowType} type
 * @type void
 * @memberOf ChannelManager
 * @returns {void}
 */
ChannelManager.prototype.tuneDown = function(successCallback, errorCallback, tuneMode, type){ return; };

/**
 * Retrieves information about all available channels.
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotFoundError - Failed to find the channel (e.g. call <var>findChannel()</var> with invalid major and minor values(e.g. non-existing channel information))              </li>
            </ul>
           
 *
 * @param {Number} major
 * @param {Number} minor
 * @param {FindChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ChannelManager
 * @returns {void}
 */
ChannelManager.prototype.findChannel = function(major, minor, successCallback, errorCallback){ return; };

/**
 * Gets the TV channel list.
            <p>
If this method is invoked without <var>number</var> parameter, all available channel informations will be retrieved.
            </p>
            <p>
If you call <em>getChannelList()</em> with <var>'FAVORITE'</var> tune navigation mode,
            </p>
            <ul>
              <li>
 All favorites channels will be retreived only if you have added <var>favorites</var> using your remote control.              </li>
              <li>
 Empty array will be returned if there is no <var>favorites</var> channel on a Tizen device.              </li>
            </ul>
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotFoundError - Failed to find the channels              </li>
            </ul>
           
 *
 * @param {FindChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {TuneMode} mode
 * @param {Number} nStart
 * @param {Number} number
 * @type void
 * @memberOf ChannelManager
 * @returns {void}
 */
ChannelManager.prototype.getChannelList = function(successCallback, errorCallback, mode, nStart, number){ return; };

/**
 * Gets information about the current channel.
 *
 * @param {WindowType} type
 * @type ChannelInfo
 * @memberOf ChannelManager
 * @returns {ChannelInfo}
 */
ChannelManager.prototype.getCurrentChannel = function(type){ var ret = new ChannelInfo(); return ret; };

/**
 * Gets a list of programs for a specific channel within a specified time duration. If this method is invoked without the parameter, all available program informations are retrieved.
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotFoundError - Failed to retrieve any information about the TV program              </li>
            </ul>
           
 *
 * @param {ChannelInfo} channelInfo
 * @param {TZDate} startTime
 * @param {ProgramListSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} duration
 * @type void
 * @memberOf ChannelManager
 * @returns {void}
 */
ChannelManager.prototype.getProgramList = function(channelInfo, startTime, successCallback, errorCallback, duration){ return; };

/**
 * Gets information about the current television program.
            <p>
If there is no TV program data grabbed from broadcaster, it will return <var>null</var>.
            </p>
           
 *
 * @param {WindowType} type
 * @type ProgramInfo
 * @memberOf ChannelManager
 * @returns {ProgramInfo}
 */
ChannelManager.prototype.getCurrentProgram = function(type){ var ret = new ProgramInfo(); return ret; };

/**
 * Adds a channel change listener for getting notified about the channel changes.
 *
 * @param {ChannelChangeCallback} callback
 * @param {WindowType} type
 * @type Number
 * @memberOf ChannelManager
 * @returns {Number}
 */
ChannelManager.prototype.addChannelChangeListener = function(callback, type){ var ret = new Number(); return ret; };

/**
 * Removes the listener to stop receiving notifications for the channel changes.
 *
 * @param {Number} channelListenerId
 * @type void
 * @memberOf ChannelManager
 * @returns {void}
 */
ChannelManager.prototype.removeChannelChangeListener = function(channelListenerId){ return; };

/**
 * The major channel number The first number in a two-part number used to identify a virtual channel. Each virtual channel carries one service, such as a television program.
 *
 * @type Number
 */
ChannelInfo.prototype.major = new Number();

/**
 * The minor channel number The second number in a two-part number used to identify a virtual channel. The minor number changes for each different service that is or will be present in a DTV transport stream.
 *
 * @type Number
 */
ChannelInfo.prototype.minor = new Number();

/**
 * Channel Name to represent the station's indentity
 *
 * @type String
 */
ChannelInfo.prototype.channelName = new String();

/**
 * Program number
 *
 * @type Number
 */
ChannelInfo.prototype.programNumber = new Number();

/**
 * PTC(Physical Transmission Channel) number
 *
 * @type Number
 */
ChannelInfo.prototype.ptc = new Number();

/**
 * The logical channel number It is used in DVB(Digital Video Broadcasting) standards for digital television.
 *
 * @type Number
 */
ChannelInfo.prototype.lcn = new Number();

/**
 * source ID
 * <p>
It is a number that uniquely identifies a source of scheduled programming.
            </p>
 *
 * @type Number
 */
ChannelInfo.prototype.sourceID = new Number();

/**
 * TSID (Transport Stream ID or transmission signal ID)
 *
 * @type Number
 */
ChannelInfo.prototype.transportStreamID = new Number();

/**
 * Original Network ID
 *
 * @type Number
 */
ChannelInfo.prototype.originalNetworkID = new Number();

/**
 * Service Name
 *
 * @type String
 */
ChannelInfo.prototype.serviceName = new String();

/**
 * Method invoked when all channels are found.
 *
 * @param {array} channelInfos
 * @type void
 * @memberOf FindChannelSuccessCallback
 * @returns {void}
 */
FindChannelSuccessCallback.prototype.onsuccess = function(channelInfos){ return; };

/**
 * The program title
 *
 * @type String
 */
ProgramInfo.prototype.title = new String();

/**
 * The program start time
 *
 * @type TZDate
 */
ProgramInfo.prototype.startTime = new TZDate();

/**
 * The duration of the program
 *
 * @type Number
 */
ProgramInfo.prototype.duration = new Number();

/**
 * A detailed description of the program's content.
 *
 * @type String
 */
ProgramInfo.prototype.detailedDescription = new String();

/**
 * Language information
 *
 * @type String
 */
ProgramInfo.prototype.language = new String();

/**
 * Rating information
 *
 * @type String
 */
ProgramInfo.prototype.rating = new String();

/**
 * Method invoked when the tuning is successfully done.
 *
 * @param {ChannelInfo} channel
 * @param {WindowType} type
 * @type void
 * @memberOf TuneCallback
 * @returns {void}
 */
TuneCallback.prototype.onsuccess = function(channel, type){ return; };

/**
 * Method invoked when the tuning is successfully done but there is no signal on the switched channel.
 *
 * @type void
 * @memberOf TuneCallback
 * @returns {void}
 */
TuneCallback.prototype.onnosignal = function(){ return; };

/**
 * Method invoked when information about the current program is available after the tune operation
            <p>
If there is no TV program data grabbed from broadcaster, <var>onprograminreceived</var> won't be invoked.
            </p>
           
 *
 * @param {ProgramInfo} program
 * @param {WindowType} type
 * @type void
 * @memberOf TuneCallback
 * @returns {void}
 */
TuneCallback.prototype.onprograminforeceived = function(program, type){ return; };

/**
 * 
 * <p>
The TV Channel API provides the control of channel change and
a way to get information about the television program for supporting an Electronic Program Guide(EPG) or Interactive Program Guide(IPG).
Using this API, TV watchers can get continuously updated EPG information about the current and upcoming TV programs on all available channels.
        </p>
 * <p>
Regarding tuning operation, there are some common behaviors.
        </p>
 * <ul>
 * <li>will be invoked if there is no channel corresponding to the request
 * </ul>
 *
 * @feature http://tizen.org/feature/tv.tuner
 * @type ChannelManager
 */
Tizen.prototype.tvchannel = new ChannelManager();

/**
 * This interface provides access to the Display Control API functionalities through the interface.
 *
 * @super Object
 * @constructor
 * @return {DisplayControlManager}
 */
function DisplayControlManager() {};
DisplayControlManager.prototype = new Object();

/**
 * This interface defines a callback when a list of supported 3D modes is retrieved successfully.
 *
 * @super Object
 * @constructor
 * @return {Mode3DEffectListSupportCallback}
 */
function Mode3DEffectListSupportCallback() {};
Mode3DEffectListSupportCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object. There will be a object that allows the access to the Display Control API.
          <p>
For example, Display Control API provides whether your device supports 3D.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {DisplayControlManagerObject}
 */
function DisplayControlManagerObject() {};
DisplayControlManagerObject.prototype = new Object();

/**
 * Gets the current 3D effect mode.
 *
 * @type Display3DEffectMode
 * @memberOf DisplayControlManager
 * @returns {Display3DEffectMode}
 */
DisplayControlManager.prototype.get3DEffectMode = function(){ var ret = new Display3DEffectMode(); return ret; };

/**
 * Checks whether playing 3D mode is available or not.
 *
 * @type Display3DModeState
 * @memberOf DisplayControlManager
 * @returns {Display3DModeState}
 */
DisplayControlManager.prototype.is3DModeEnabled = function(){ var ret = new Display3DModeState(); return ret; };

/**
 * Gets the supported 3D effects.
 *
 * @param {Mode3DEffectListSupportCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf DisplayControlManager
 * @returns {void}
 */
DisplayControlManager.prototype.getSupported3DEffectModeList = function(successCallback, errorCallback){ return; };

/**
 * Method invoked when the list of 3D modes is retrieved successfully.
 *
 * @param {array} mode3DEffects
 * @type void
 * @memberOf Mode3DEffectListSupportCallback
 * @returns {void}
 */
Mode3DEffectListSupportCallback.prototype.onsuccess = function(mode3DEffects){ return; };

/**
 * 
 * <p>
This API provides interfaces for managing stereoscopic 3D effects
for television signals.
        </p>
 * <p>
Modern TVs and projectors can display two images, left image and right image,
which are displayed to left eye and right eye. This technique creates
illusion of depth, which is perceived by users as 3D image.
        </p>
 * <p>
For more information about stereoscopy, see
<a href="http://en.wikipedia.org/wiki/Stereoscopy">Wikipedia article</a>.
        </p>
 * <p>
There are several formats of input images supported by stereoscopy
plugin:
        </p>
 * <ul>
 * <li>Side-by-side: Left and Right images are merged into one picture, left image at left side, right image at right side. Both images are scaled to fit in original image ratio.
 * <li>Top-bottom: Left and Right images are merged into one picture, left image at top side, right image at bottom side. and scaled to fit in original image ratio.
 * <li>Line-by-line: Left and Right images are interlaced by row first left, second right.
 * <li>Vertical-strip: Left and Right images are interlaced by colum, first left, second right.
 * <li>Frame-sequence: Left and Right images are interlaced by frames.
 * </ul>
 * <p>
An advanced devices are able to computationally generate depth
data by processing non-stereoscopic images. A depth data is used
to render left and right stereoscopic images from a source image lacking
this information. A quality of such stereoscopic images depends
on computational power used for processing, algorithms and properties
of source data. For more information see
<a href="http://en.wikipedia.org/wiki/2D_to_3D_conversion">article at Wikipedia.</a>        </p>
 * <p>
There will be a <em>tizen.tvdisplaycontrol</em> object that allows accessing the
functionality of the display control API.
        </p>
 *
 * @feature http://tizen.org/feature/tv.display
 * @type DisplayControlManager
 */
DisplayControlManagerObject.prototype.tvdisplaycontrol = new DisplayControlManager();

/**
 * 
 * <p>
This API provides interfaces for managing stereoscopic 3D effects
for television signals.
        </p>
 * <p>
Modern TVs and projectors can display two images, left image and right image,
which are displayed to left eye and right eye. This technique creates
illusion of depth, which is perceived by users as 3D image.
        </p>
 * <p>
For more information about stereoscopy, see
<a href="http://en.wikipedia.org/wiki/Stereoscopy">Wikipedia article</a>.
        </p>
 * <p>
There are several formats of input images supported by stereoscopy
plugin:
        </p>
 * <ul>
 * <li>Side-by-side: Left and Right images are merged into one picture, left image at left side, right image at right side. Both images are scaled to fit in original image ratio.
 * <li>Top-bottom: Left and Right images are merged into one picture, left image at top side, right image at bottom side. and scaled to fit in original image ratio.
 * <li>Line-by-line: Left and Right images are interlaced by row first left, second right.
 * <li>Vertical-strip: Left and Right images are interlaced by colum, first left, second right.
 * <li>Frame-sequence: Left and Right images are interlaced by frames.
 * </ul>
 * <p>
An advanced devices are able to computationally generate depth
data by processing non-stereoscopic images. A depth data is used
to render left and right stereoscopic images from a source image lacking
this information. A quality of such stereoscopic images depends
on computational power used for processing, algorithms and properties
of source data. For more information see
<a href="http://en.wikipedia.org/wiki/2D_to_3D_conversion">article at Wikipedia.</a>        </p>
 * <p>
There will be a <em>tizen.tvdisplaycontrol</em> object that allows accessing the
functionality of the display control API.
        </p>
 *
 * @feature http://tizen.org/feature/tv.display
 * @type DisplayControlManager
 */
Tizen.prototype.tvdisplaycontrol = new DisplayControlManager();

/**
 * The TVInputDeviceManager interface provides the features to check for availability and register for input device events.
 *
 * @super Object
 * @constructor
 * @return {TVInputDeviceManager}
 */
function TVInputDeviceManager() {};
TVInputDeviceManager.prototype = new Object();

/**
 * The TVInputDeviceManager interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.tvinputdevice object that allows accessing the functionality of the TV Input Device API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TVInputDeviceManagerObject}
 */
function TVInputDeviceManagerObject() {};
TVInputDeviceManagerObject.prototype = new Object();

/**
 * The InputDeviceKey interface stores information about the key.
 *
 * @super Object
 * @constructor
 * @return {InputDeviceKey}
 */
function InputDeviceKey() {};
InputDeviceKey.prototype = new Object();

/**
 * Retrieves the list of keys can be registered with the method.
            <p>
Mandatory keys will not be retrieved by this method.
            </p>
           
 *
 * @type array
 * @memberOf TVInputDeviceManager
 * @returns {array}
 */
TVInputDeviceManager.prototype.getSupportedKeys = function(){ var ret = new array(); return ret; };

/**
 * Returns information about the key which has the given name.
 *
 * @param {InputDeviceKeyName} keyName
 * @type InputDeviceKey
 * @memberOf TVInputDeviceManager
 * @returns {InputDeviceKey}
 */
TVInputDeviceManager.prototype.getKey = function(keyName){ var ret = new InputDeviceKey(); return ret; };

/**
 * Registers an input device key to receive DOM keyboard event when it is pressed or released
            <p>
When an application wants to react to the Input Device keys being pressed, it should register this key.
            </p>
            <p>
An application can not register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
            </p>
           
 *
 * @param {InputDeviceKeyName} keyName
 * @type void
 * @memberOf TVInputDeviceManager
 * @returns {void}
 */
TVInputDeviceManager.prototype.registerKey = function(keyName){ return; };

/**
 * Unregisters an input device key
 *
 * @param {InputDeviceKeyName} keyName
 * @type void
 * @memberOf TVInputDeviceManager
 * @returns {void}
 */
TVInputDeviceManager.prototype.unregisterKey = function(keyName){ return; };

/**
 * The TV Input Device API provides functions to subscribe key events of the input device.
 * <p>
The following remote control keys are mandatory input device keys. They are available to an application on any Tizen TV.
        </p>
 * <ul>
 * <li>ArrowLeft, ArrowUp, ArrowRight, ArrowDown
 * <li>Enter
 * <li>Back
 * </ul>
 * <p>
The Tizen TV may provide additional keys depending on a particular input device.
An application can handle device dependent key events after registration.
        </p>
 *
 * @feature http://tizen.org/feature/tv.inputdevice
 * @type TVInputDeviceManager
 */
TVInputDeviceManagerObject.prototype.tvinputdevice = new TVInputDeviceManager();

/**
 * The name of the key, for example or .
 * <p>
If the key is listed in the <a href="http://www.w3.ohttp://127.0.0.1:57746/help/topic/2014/WD-DOM-Level-3-Events-key-20140612">DOM Level 3 KeyboardEvent key Values</a> specification, the <em>name</em> attribute is equal to the <em>key value</em> specified there. (The <a href="http://www.w3.ohttp://127.0.0.1:57746/help/topic/2014/WD-DOM-Level-3-Events-key-20140612/#keys-media-controller">Media Controller Keys</a> section is the most relevant to the Input Device API)
            </p>
 * <p>
If the "DOM Level 3 KeyboardEvent key Value" does not contain appropriate entry for the key, then the Input Device provides a device specific <em>name</em>.
            </p>
 *
 * @type InputDeviceKeyName
 */
InputDeviceKey.prototype.name = new InputDeviceKeyName();

/**
 * The numeric code of the key, like or .
 * <p>
This is the <em>keyCode</em> attribute value of the Key Event generated by the key.
            </p>
 *
 * @type Number
 */
InputDeviceKey.prototype.code = new Number();

/**
 * The TV Input Device API provides functions to subscribe key events of the input device.
 * <p>
The following remote control keys are mandatory input device keys. They are available to an application on any Tizen TV.
        </p>
 * <ul>
 * <li>ArrowLeft, ArrowUp, ArrowRight, ArrowDown
 * <li>Enter
 * <li>Back
 * </ul>
 * <p>
The Tizen TV may provide additional keys depending on a particular input device.
An application can handle device dependent key events after registration.
        </p>
 *
 * @feature http://tizen.org/feature/tv.inputdevice
 * @type TVInputDeviceManager
 */
Tizen.prototype.tvinputdevice = new TVInputDeviceManager();

/**
 * This interface defines a callback that is invoked when a list of available windows is retrieved successfully.
 *
 * @super Object
 * @constructor
 * @return {AvailableWindowListCallback}
 */
function AvailableWindowListCallback() {};
AvailableWindowListCallback.prototype = new Object();

/**
 * This interface includes the success callback that is invoked when the position and size of TV hole window has been changed or retrieved.
 *
 * @super Object
 * @constructor
 * @return {WindowRectangleSuccessCallback}
 */
function WindowRectangleSuccessCallback() {};
WindowRectangleSuccessCallback.prototype = new Object();

/**
 * This interface provides access to the API funtionalities through the interface.
 *
 * @super Object
 * @constructor
 * @return {TVWindowManager}
 */
function TVWindowManager() {};
TVWindowManager.prototype = new Object();

/**
 * This interface includes the success callback that is invoked when the source has been set.
 *
 * @super Object
 * @constructor
 * @return {SourceChangedSuccessCallback}
 */
function SourceChangedSuccessCallback() {};
SourceChangedSuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object.
          <p>
There will be a <em>tizen.tvwindow</em> object that allows access to the
functionality of the TV Window API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TVWindowManagerObject}
 */
function TVWindowManagerObject() {};
TVWindowManagerObject.prototype = new Object();

/**
 * Method invoked when a list of available windows is retrieved.
 *
 * @param {array} type
 * @type void
 * @memberOf AvailableWindowListCallback
 * @returns {void}
 */
AvailableWindowListCallback.prototype.onsuccess = function(type){ return; };

/**
 * Method invoked when the position and size of TV hole window has been changed or retrieved
            <p>
This method returns information <b>windowRect</b> and <b>type</b>.
For more detailed information about <em>windowRect</em>, see the description of <em>show()</em>.
            </p>
           
 *
 * @param {array} windowRect
 * @param {WindowType} type
 * @type void
 * @memberOf WindowRectangleSuccessCallback
 * @returns {void}
 */
WindowRectangleSuccessCallback.prototype.onsuccess = function(windowRect, type){ return; };

/**
 * Gets the list of available windows.
 *
 * @param {AvailableWindowListCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf TVWindowManager
 * @returns {void}
 */
TVWindowManager.prototype.getAvailableWindows = function(successCallback, errorCallback){ return; };

/**
 * Changes the source of TV hole window.
 *
 * @param {SystemInfoVideoSourceInfo} videoSource
 * @param {SourceChangedSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {WindowType} type
 * @type void
 * @memberOf TVWindowManager
 * @returns {void}
 */
TVWindowManager.prototype.setSource = function(videoSource, successCallback, errorCallback, type){ return; };

/**
 * Gets information about the current source of a specified TV hole window.
 *
 * @param {WindowType} type
 * @type SystemInfoVideoSourceInfo
 * @memberOf TVWindowManager
 * @returns {SystemInfoVideoSourceInfo}
 */
TVWindowManager.prototype.getSource = function(type){ var ret = new SystemInfoVideoSourceInfo(); return ret; };

/**
 * Sets the display area of TV hole window and show it on the display screen.
            <p>
The <b>rectangle</b> parameter requires exactly four elements which are described below:
            </p>
            <ul>
              <li>
The first element indicates the x coordinate of TV hole window on display screen (distance from the left edge of the screen).              </li>
              <li>
The second element indicates the y coordinate of TV hole window on display screen (distance from the top edge of the screen).              </li>
              <li>
The third element indicates the width of TV hole window.              </li>
              <li>
The fourth element indicates the height of TV hole window.              </li>
            </ul>
            <p>
The each element can be described in either absolute value(pixel) using pixel unit "px"
or relative value(percentage) using percentage unit "%". <br/> If you do not specify any unit after a value then it indicates pixel unit.
            </p>
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
<em>InvalidValuesError</em> will be thrown if <em>rectangle</em> has any element with invalid format(e.g. "10p") or it does not have 4 elements.              </li>
              <li>
<em>NotSupportedError</em> will be thrown if you set <em>rectangle</em> which is not within the boundary of the display area or when the TV hole window is not supported in current screen orientation.               </li>
              <li>
<em>TypeMismatchError</em> will be thrown if <em>rectangle</em> is not an array.              </li>
            </ul>
           
 *
 * @param {WindowRectangleSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {array} rectangle
 * @param {WindowType} type
 * @type void
 * @memberOf TVWindowManager
 * @returns {void}
 */
TVWindowManager.prototype.show = function(successCallback, errorCallback, rectangle, type){ return; };

/**
 * Hides the TV hole window on the display screen.
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {WindowType} type
 * @type void
 * @memberOf TVWindowManager
 * @returns {void}
 */
TVWindowManager.prototype.hide = function(successCallback, errorCallback, type){ return; };

/**
 * Gets the area information of TV hole window on the display screen.
            <p>
According to the specified <b>unit</b>, information about the area will be passed to an array that contains 4 strings through <em>WindowRectangleSuccessCallback</em> as follows :
            </p>
            <ul>
              <li>
If you set <em>"px"</em> as <em>unit</em>, ["0px", "0px", "1920px", "1080px"]               </li>
              <li>
If you set <em>"%"</em> as <em>unit</em>, ["0%", "0%", "100%", "100%"]               </li>
            </ul>
            <p>
If you omit <b>unit</b>, the pixel(<var>"px"</var>) unit will be used as a default unit.
            </p>
           
 *
 * @param {WindowRectangleSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {MeasurementUnit} unit
 * @param {WindowType} type
 * @type void
 * @memberOf TVWindowManager
 * @returns {void}
 */
TVWindowManager.prototype.getRect = function(successCallback, errorCallback, unit, type){ return; };

/**
 * Method invoked when the new source has been set.
            <p>
This method returns information <b>source</b> and <b>type</b>.
            </p>
           
 *
 * @param {SystemInfoVideoSourceInfo} source
 * @param {WindowType} type
 * @type void
 * @memberOf SourceChangedSuccessCallback
 * @returns {void}
 */
SourceChangedSuccessCallback.prototype.onsuccess = function(source, type){ return; };

/**
 * 
 * <p>
This API provides a way to embed the display of a video source in a Tizen web application running on a device associated with the TV.
It allows to select one of the available video sources and to show or hide the disply in a Tizen Web application.
There will be a <em>tizen.tvwindow</em> object that allows access to the functionality of the TV Window API.
Please note that the TV Window API does not make or manage any windows, it controls
virtual hole in a Tizen web application, which is used to show a video source
supported by hardware. If you want to show a TV signal, then you execute
show function, which cuts a hole from the window of your application.
The user can watch TV through this hole. A TV source is controlled by the user or
by you with the API. You do not have to implement any routines, if you
do not want to interact with TV image.
        </p>
 *
 * @feature http://tizen.org/feature/tv.pip
 * @type TVWindowManager
 */
TVWindowManagerObject.prototype.tvwindow = new TVWindowManager();

/**
 * 
 * <p>
This API provides a way to embed the display of a video source in a Tizen web application running on a device associated with the TV.
It allows to select one of the available video sources and to show or hide the disply in a Tizen Web application.
There will be a <em>tizen.tvwindow</em> object that allows access to the functionality of the TV Window API.
Please note that the TV Window API does not make or manage any windows, it controls
virtual hole in a Tizen web application, which is used to show a video source
supported by hardware. If you want to show a TV signal, then you execute
show function, which cuts a hole from the window of your application.
The user can watch TV through this hole. A TV source is controlled by the user or
by you with the API. You do not have to implement any routines, if you
do not want to interact with TV image.
        </p>
 *
 * @feature http://tizen.org/feature/tv.pip
 * @type TVWindowManager
 */
Tizen.prototype.tvwindow = new TVWindowManager();

/**
 * This interface defines what is instantiated for the Web setting API by the object from the Tizen Platform.
          <p>
<em>tizen.websetting</em> object is available to manage the settings of the Web view in your Web application.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebSettingObject}
 */
function WebSettingObject() {};
WebSettingObject.prototype = new Object();

/**
 * This is the top-level interface for the WebSetting API that managed the settings of the Web view in your Web application.
 *
 * @super Object
 * @constructor
 * @return {WebSettingManager}
 */
function WebSettingManager() {};
WebSettingManager.prototype = new Object();

/**
 * This Web setting API defines a set of APIs that manages the setting states of the Web view in your Web application.
 * <p>
A Tizen Web application includes a web view and the properties below of the web view can be managed via the Web setting API:
        </p>
 * <ul>
 * <li>Delete all the cookies saved for the web view in the Web application.
 * <li>Set a custom user agent string of the web view in the Web application.
 * </ul>
 * <p>
Note that all the settings using the Web setting API is bound to your application; thus, no other applications are affected via the Web setting API calls within your application.
        </p>
 * <p>
For more information on the Web setting features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/sys_guide/websetting.htm">Web Setting Guide</a>.
        </p>
 *
 * @type WebSettingManager
 */
WebSettingObject.prototype.websetting = new WebSettingManager();

/**
 * Sets the custom user agent string for your Web application.
            <p>
This method allows the user to set the user agent string of the Web view in the Web application.  By default, the Web view in your application
has the same user agent string as the Tizen browser on the device.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any error occurs while setting the user agent string.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
            </ul>
           
 *
 * @param {String} userAgent
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf WebSettingManager
 * @returns {void}
 */
WebSettingManager.prototype.setUserAgentString = function(userAgent, successCallback, errorCallback){ return; };

/**
 * Removes all the cookies saved for the Web view in your Web application.
            <p>
The Web view in your Web application can store cookies like a browser. This method allows the user to remove all the cookies saved for the Web application.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any error occurs while deleting the cookies.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf WebSettingManager
 * @returns {void}
 */
WebSettingManager.prototype.removeAllCookies = function(successCallback, errorCallback){ return; };

/**
 * This Web setting API defines a set of APIs that manages the setting states of the Web view in your Web application.
 * <p>
A Tizen Web application includes a web view and the properties below of the web view can be managed via the Web setting API:
        </p>
 * <ul>
 * <li>Delete all the cookies saved for the web view in the Web application.
 * <li>Set a custom user agent string of the web view in the Web application.
 * </ul>
 * <p>
Note that all the settings using the Web setting API is bound to your application; thus, no other applications are affected via the Web setting API calls within your application.
        </p>
 * <p>
For more information on the Web setting features, see <a href="http://127.0.0.1:57746/help/topic/org.tizen.mobile.web.appprogramming/html/guide/sys_guide/websetting.htm">Web Setting Guide</a>.
        </p>
 *
 * @type WebSettingManager
 */
Tizen.prototype.websetting = new WebSettingManager();

