import atLibServices from '~services';

import Application from '~models/Application';
import Base from '~models/Base';
import Config from '~models/Config';
import Credential from '~models/Credential';
import CredentialType from '~models/CredentialType';
import Instance from '~models/Instance';
import InstanceGroup from '~models/InstanceGroup';
import Inventory from '~models/Inventory';
import InventoryScript from '~models/InventoryScript';
import InventorySource from '~models/InventorySource';
import Job from '~models/Job';
import JobEvent from '~models/JobEvent';
import JobTemplate from '~models/JobTemplate';
import Jobs from '~models/Jobs';
import Me from '~models/Me';
import NotificationTemplate from '~models/NotificationTemplate';
import Organization from '~models/Organization';
import Project from '~models/Project';
import Schedule from '~models/Schedule';
import UnifiedJobTemplate from '~models/UnifiedJobTemplate';
import WorkflowJob from '~models/WorkflowJob';
import WorkflowJobTemplate from '~models/WorkflowJobTemplate';
import WorkflowJobTemplateNode from '~models/WorkflowJobTemplateNode';

import ModelsStrings from '~models/models.strings';

const MODULE_NAME = 'at.lib.models';

angular
    .module(MODULE_NAME, [
        atLibServices
    ])
    .service('ApplicationModel', Application)
    .service('BaseModel', Base)
    .service('ConfigModel', Config)
    .service('CredentialModel', Credential)
    .service('CredentialTypeModel', CredentialType)
    .service('InstanceGroupModel', InstanceGroup)
    .service('InstanceModel', Instance)
    .service('InventoryModel', Inventory)
    .service('InventoryScriptModel', InventoryScript)
    .service('InventorySourceModel', InventorySource)
    .service('JobEventModel', JobEvent)
    .service('JobModel', Job)
    .service('JobTemplateModel', JobTemplate)
    .service('JobsModel', Jobs)
    .service('MeModel', Me)
    .service('NotificationTemplate', NotificationTemplate)
    .service('OrganizationModel', Organization)
    .service('ProjectModel', Project)
    .service('ScheduleModel', Schedule)
    .service('UnifiedJobTemplateModel', UnifiedJobTemplate)
    .service('WorkflowJobModel', WorkflowJob)
    .service('WorkflowJobTemplateModel', WorkflowJobTemplate)
    .service('WorkflowJobTemplateNodeModel', WorkflowJobTemplateNode)
    .service('WorkflowJobTemplateNodeModel', WorkflowJobTemplateNode)
    .service('ModelsStrings', ModelsStrings);

export default MODULE_NAME;
