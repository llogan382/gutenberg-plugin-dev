const { registerBlockType } = wp.blocks;
const {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
} = wp.components;
const {
	RichText,
	InspectorControls,
} = wp.editor;


registerBlockType('gutenberg-examples/example-01-basic-esnext', {
	title: 'Inspector controls example',

	icon: 'universal-access-alt',

	category: 'layout',

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		checkboxField: {
			type: 'boolean',
			default: true,
		},
		radioField: {
			type: 'string',
			default: 'yes',
		},
		textField: {
			type: 'string',
		},
		toggleField: {
			type: 'boolean',
		},
		selectField: {
			type: 'string',
		},
		formValue: {
			type: 'string',
		},
	},

	edit({ attributes, setAttributes }) {
		const { content, checkboxField, radioField, textField, toggleField, selectField, formValue } = attributes;

		const onChangeContent = (newContent) => {
			setAttributes({
				content: newContent
			});
		}


		const onChangeCheckboxField = (newValue) => {
			if (newValue === true) {
				return setAttributes({
					checkboxField: newValue,
					formValue: 'checkbox',
				});
			}
			setAttributes({
				checkboxField: newValue,
			});
		}

		const onChangeRadioField = (newValue) => {
			if (newValue === 'yes') {
				return setAttributes({
					radioField: newValue,
					formValue: 'radio',
				});
			}
			setAttributes({ radioField: newValue });
		}

		const onChangeTextField = (newValue) => {
			if (newValue) {
				return setAttributes({
					textField: newValue,
					formValue: 'text',
				});
			}
			setAttributes({ textField: newValue });
		}

		const onChangeToggleField = (newValue) => {
			if (newValue === true) {
				return setAttributes({
					toggleField: newValue,
					formValue: 'tel',
				});
			}
			setAttributes({ toggleField: newValue });
		}

		const onChangeSelectField = (newValue) => {
			if (newValue === true) {
				return setAttributes({
					selectField: newValue,
					formValue: 'select',
				});
			}
			setAttributes({ selectField: newValue });
		}

		// const showListType = (newValue) => {
		// 	setAttributes({ listType: newValue });
		// }

		return (
			<>
				<InspectorControls>

					<CheckboxControl
						heading="Checkbox Field"
						label="Tick Me"
						help="Check this to display items in a checkbox"
						checked={checkboxField}
						onChange={onChangeCheckboxField}
					/>

					<RadioControl
						label="Radio Field"
						selected={radioField}
						options={
							[
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' },
							]
						}
						onChange={onChangeRadioField}

					/>

					<TextControl
						label="Text Field"
						help="Additional help text"
						value={textField}
						onChange={onChangeTextField}
					/>

					<ToggleControl
						label="Toggle Field"
						checked={toggleField}
						onChange={onChangeToggleField}
					/>

					<SelectControl
						label="Select Control"
						value={selectField}
						options={
							[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]
						}
						onChange={onChangeSelectField}
					/>

				</InspectorControls>

				<RichText
					key="editable" q
					tagName="p"
					onChange={onChangeContent}
					value={content}
				/>
			</>
		);
	},

	save({ attributes }) {
		const { content, checkboxField, radioField, textField, toggleField, selectField, formValue } = attributes;

		return (
			<form>
				<input
					name="formItems"
					type={formValue}
				/>

				<RichText.Content
					value={content}
				/>
			</form>
		);
	},
});