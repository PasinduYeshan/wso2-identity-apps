/**
 * Copyright (c) 2021, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Class containing constants.
 */
export class UserstoreConstants {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() { }

    // Name of the Asgardeo userstore.
    public static readonly ASGARDEO_USERSTORE: string = "ASGARDEO-USER";
    public static readonly CUSTOMER_USERSTORE: string = "DEFAULT";
}
