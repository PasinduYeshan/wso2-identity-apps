/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
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

import Autocomplete, {
    AutocompleteRenderGetTagProps,
    AutocompleteRenderInputParams
} from "@oxygen-ui/react/Autocomplete";
import Chip from "@oxygen-ui/react/Chip";
import TextField from "@oxygen-ui/react/TextField";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import React, { FunctionComponent, HTMLAttributes, ReactElement, SyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { AutoCompleteRenderOption } from "./auto-complete-render-option";

interface ExcludeUserStoreConfigPropsInterface extends IdentifiableComponentInterface {
    userStoreOptions: string[];
    initialSelectedUserStores?: string[];
    selectedUserStores: string[];
    onChangeUserStores: (userStores: string[]) => void;
    hasError?: boolean;
    errorMessage?: string;
}

export const ExcludeUserStoreConfig: FunctionComponent<ExcludeUserStoreConfigPropsInterface> =
    (props: ExcludeUserStoreConfigPropsInterface): ReactElement => {

        const {
            userStoreOptions,
            initialSelectedUserStores,
            selectedUserStores,
            onChangeUserStores,
            hasError,
            errorMessage,
            [ "data-componentid" ]: componentId
        } = props;

        const { t } = useTranslation();

        const [ activeOption, setActiveOption ] = useState<string>(undefined);
        const [ isTouched, setIsTouched ] = useState<boolean>(false);

        return (
            <Autocomplete
                className="exclude-user-store-config"
                multiple
                disableCloseOnSelect
                disablePortal
                options={ userStoreOptions }
                value={ selectedUserStores ? selectedUserStores : [] }
                isOptionEqualToValue={ (option: string, value: string) => option === value }
                getOptionLabel={ (userStore: string) => userStore }
                renderInput={ (params: AutocompleteRenderInputParams) => (
                    <TextField
                        { ...params }
                        data-componentid={ `${componentId}-textfield` }
                        placeholder="Select User Stores"
                        error={ isTouched && hasError }
                        helperText={ isTouched && hasError && errorMessage }
                        label="Excluded User Stores"
                        size="small"
                        className="user-store-text-field"
                    />
                ) }
                onChange={ (event: SyntheticEvent, userStores: string[]) => onChangeUserStores(userStores) }
                onClose={ () => setIsTouched(true) }
                renderTags={ (
                    value: string[],
                    getTagProps: AutocompleteRenderGetTagProps
                ) => value.map((option: string, index: number) => (
                    <>
                        { /* `activeOption` and `setActiveOption` are not part of Chip API */ }
                        { /* TODO: Tracker: https://github.com/wso2/product-is/issues/21351 */ }
                        { /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ }
                        { /* @ts-ignore */ }
                        <Chip
                            { ...getTagProps({ index }) }
                            key={ index }
                            label={ option }
                            option={ option }
                            activeOption={ activeOption }
                            setActiveOption={ setActiveOption }
                            variant={
                                initialSelectedUserStores?.find(
                                    (userStore: string) => userStore === option
                                )
                                    ? "filled"
                                    : "outlined"
                            }
                        />
                    </>
                )) }
                renderOption={ (
                    props: HTMLAttributes<HTMLLIElement>,
                    option: string,
                    { selected }: { selected: boolean }
                ) => (
                    <AutoCompleteRenderOption
                        selected={ selected }
                        displayName={ option }
                        renderOptionProps={ props }
                    />
                ) }
            />
        );
    };

