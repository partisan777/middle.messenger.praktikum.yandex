export const metaAttrInputs = [
    { label: "avatar",
      inputAttrs: [
          'type="image"',
          'name="avatar"',
          'id="add-avatar-input"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-avatar-input"
    }
];



export const metaAttrButtons = [
    {   labelVisible: "Добавить",
        buttonAttrs: [
            'class="button-button";',
            'type="button"',
            'id="save-avatar-button"'
        ]
    },
    {
        labelVisible: "Закрыть",
        buttonAttrs: [
            'class="link-button";',
            'type="button"',
            'id="close-add-avatar-button"'
        ]
    }

]
