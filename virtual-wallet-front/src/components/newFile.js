/* extensions: [".vue"], target: 3.3, lib: "vue", jsxSlots: false, strictTemplates: false, skipTemplateCodegen: false, nativeTags: ["html","body","base","head","link","meta","style","title","address","article","aside","footer","header","hgroup","h1","h2","h3","h4","h5","h6","nav","section","div","dd","dl","dt","figcaption","figure","picture","hr","img","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","script","noscript","del","ins","caption","col","colgroup","table","thead","tbody","td","th","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","template","blockquote","iframe","tfoot","svg","animate","animateMotion","animateTransform","circle","clipPath","color-profile","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistanceLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","hatch","hatchpath","image","line","linearGradient","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","solidcolor","stop","switch","symbol","text","textPath","tspan","unknown","use","view","slot","component"], dataAttributes: [], htmlAttributes: ["aria-*"], optionsWrapper: ["(await import('vue')).defineComponent(",")"], macros: {"defineProps":["defineProps"],"defineSlots":["defineSlots"],"defineEmits":["defineEmits"],"defineExpose":["defineExpose"],"defineModel":["defineModel"],"defineOptions":["defineOptions"],"withDefaults":["withDefaults"]}, plugins: [], hooks: [], experimentalDefinePropProposal: false, experimentalAdditionalLanguageModules: [], experimentalResolveStyleCssClasses: "scoped", experimentalModelPropName: {"":{"input":true},"value":{"input":{"type":"text"},"textarea":true,"select":true}}, experimentalUseElementAccessInTemplate: false */
export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},

setup: {
getCaptchaCode = (value) => {
/* you can access captcha code */
console.log(value);
},
checkValidCaptcha = (value) => {
/* expected return boolean if your value and captcha code are same return True otherwise return False */
console.log(value);
},

data: function () {
return {
phone: null,
phoneCode: null,
captcha: null,
password: null,
passwordCheck: null,
invitationCode: 'kd5df5gf3',
codigoPais: null,
paises: [
{ name: 'Ecuador', code: '+593' },
{ name: 'Brazil', code: '+55' },
{ name: 'Colombia', code: '+57' },
{ name: 'Venezuela', code: '+58' },
{ name: 'El Salvador', code: '+503' }
]
};
}
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'SignUpComponent';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Fieldset', typeof __VLS_localComponents, "Fieldset", "Fieldset", "Fieldset"> &
__VLS_WithComponent<'Dropdown', typeof __VLS_localComponents, "Dropdown", "Dropdown", "Dropdown"> &
__VLS_WithComponent<'InputMask', typeof __VLS_localComponents, "InputMask", "InputMask", "InputMask"> &
__VLS_WithComponent<'InputText', typeof __VLS_localComponents, "InputText", "InputText", "InputText"> &
__VLS_WithComponent<'Button', typeof __VLS_localComponents, "Button", "Button", "Button"> &
__VLS_WithComponent<'VueClientRecaptcha', typeof __VLS_localComponents, "VueClientRecaptcha", "VueClientRecaptcha", "VueClientRecaptcha"> &
__VLS_WithComponent<'Password', typeof __VLS_localComponents, "Password", "Password", "Password"> &
__VLS_WithComponent<'divider', typeof __VLS_localComponents, "Divider", "divider", "divider">;
({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form;
__VLS_components.Fieldset; __VLS_components.Fieldset;
// @ts-ignore
[Fieldset, Fieldset,];
({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).br; ({} as __VLS_IntrinsicElements).br; ({} as __VLS_IntrinsicElements).br; ({} as __VLS_IntrinsicElements).br; ({} as __VLS_IntrinsicElements).br; ({} as __VLS_IntrinsicElements).br; ({} as __VLS_IntrinsicElements).br; ({} as __VLS_IntrinsicElements).br;
__VLS_components.Dropdown;
// @ts-ignore
[Dropdown,];
__VLS_components.InputMask;
// @ts-ignore
[InputMask,];
__VLS_components.InputText; __VLS_components.InputText; __VLS_components.InputText;
// @ts-ignore
[InputText, InputText, InputText,];
__VLS_components.Button; __VLS_components.Button; __VLS_components.Button;
// @ts-ignore
[Button, Button, Button,];
({} as __VLS_IntrinsicElements).small; ({} as __VLS_IntrinsicElements).small; ({} as __VLS_IntrinsicElements).small; ({} as __VLS_IntrinsicElements).small;
__VLS_components.VueClientRecaptcha;
// @ts-ignore
[VueClientRecaptcha,];
__VLS_components.Password; __VLS_components.Password;
// @ts-ignore
[Password, Password,];
({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).i;
__VLS_components.Divider; __VLS_components.divider;
// @ts-ignore
[divider,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_2 = __VLS_1({ ...{ onSubmit: {} as any, }, class: ("container mx-auto px-4 md:px-20"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, class: ("container mx-auto px-4 md:px-20"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4 = { 'submit': __VLS_pickEvent(__VLS_3.emit!, 'submit' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_1, typeof __VLS_2>).onSubmit) };
__VLS_4 = {
submit: (__VLS_ctx.login)
};
{
let __VLS_5!: 'Fieldset' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Fieldset : (typeof __VLS_resolvedLocalAndGlobalComponents)['Fieldset'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { Fieldset: typeof __VLS_5; }).Fieldset;
({} as { Fieldset: typeof __VLS_5; }).Fieldset;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
{
const __VLS_9 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_10 = __VLS_elementAsFunctionalComponent(__VLS_9);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_11 = __VLS_10({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_10));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_9, typeof __VLS_11> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_8.slots!).legend;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_14 = __VLS_13({ ...{}, class: ("flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_12, typeof __VLS_14> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center"), });
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_18 = __VLS_17({ ...{}, class: ("pi pi-users mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, class: ("pi pi-users mr-2"), });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
}
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_22 = __VLS_21({ ...{}, class: ("font-bold text-lg m-0 text-cyan-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("font-bold text-lg m-0 text-cyan-900"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
(__VLS_23.slots!).default;
}
(__VLS_15.slots!).default;
}
}
}
{
const __VLS_24 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_26 = __VLS_25({ ...{}, class: ("flex items-center justify-between flex-col sm:flex-row"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_24, typeof __VLS_26> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center justify-between flex-col sm:flex-row"), });
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
{
const __VLS_28 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_30 = __VLS_29({ ...{}, class: ("w-full sm:w-3/6"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, class: ("w-full sm:w-3/6"), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
{
const __VLS_32 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_33 = __VLS_elementAsFunctionalComponent(__VLS_32);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_34 = __VLS_33({ ...{}, class: ("text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_32, typeof __VLS_34> & Record<string, unknown>) => void)({ ...{}, class: ("text-stone-600 font-bold italic text-xs"), });
const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34)!;
(__VLS_35.slots!).default;
}
{
const __VLS_36 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
({} as __VLS_IntrinsicElements).br;
const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
}
{
let __VLS_40!: 'Dropdown' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Dropdown : (typeof __VLS_resolvedLocalAndGlobalComponents)['Dropdown'];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, modelValue: ((__VLS_ctx.codigoPais)), editable: (true), options: ((__VLS_ctx.paises)), optionLabel: ("name"), placeholder: ("Selecciona tu país"), class: ("w-4/6 lg:w-5/12"), }));
({} as { Dropdown: typeof __VLS_40; }).Dropdown;
const __VLS_42 = __VLS_41({ ...{}, modelValue: ((__VLS_ctx.codigoPais)), editable: (true), options: ((__VLS_ctx.paises)), optionLabel: ("name"), placeholder: ("Selecciona tu país"), class: ("w-4/6 lg:w-5/12"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.codigoPais)), editable: (true), options: ((__VLS_ctx.paises)), optionLabel: ("name"), placeholder: ("Selecciona tu país"), class: ("w-4/6 lg:w-5/12"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
}
{
let __VLS_44!: 'InputMask' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputMask : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputMask'];
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{}, id: ("basic"), modelValue: ((__VLS_ctx.phone)), mask: ("99-999-9999"), placeholder: ("99-999-999"), }));
({} as { InputMask: typeof __VLS_44; }).InputMask;
const __VLS_46 = __VLS_45({ ...{}, id: ("basic"), modelValue: ((__VLS_ctx.phone)), mask: ("99-999-9999"), placeholder: ("99-999-999"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_44, typeof __VLS_46> & Record<string, unknown>) => void)({ ...{}, id: ("basic"), modelValue: ((__VLS_ctx.phone)), mask: ("99-999-9999"), placeholder: ("99-999-999"), });
const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
}
{
const __VLS_48 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
({} as __VLS_IntrinsicElements).br;
const __VLS_50 = __VLS_49({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_50> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
}
{
const __VLS_52 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
({} as __VLS_IntrinsicElements).br;
const __VLS_54 = __VLS_53({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
}
{
const __VLS_56 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_58 = __VLS_57({ ...{}, class: ("text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("text-stone-600 font-bold italic text-xs"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
{
let __VLS_60!: 'InputText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputText : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputText'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, modelValue: ((__VLS_ctx.phoneCode)), placeholder: ("Codigo enviado al telefono"), class: ("text-stone-600 font-bold italic text-xs"), }));
({} as { InputText: typeof __VLS_60; }).InputText;
const __VLS_62 = __VLS_61({ ...{}, modelValue: ((__VLS_ctx.phoneCode)), placeholder: ("Codigo enviado al telefono"), class: ("text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.phoneCode)), placeholder: ("Codigo enviado al telefono"), class: ("text-stone-600 font-bold italic text-xs"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
}
{
let __VLS_64!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{}, label: ("Obtener codigo"), severity: ("info"), outlined: (true), }));
({} as { Button: typeof __VLS_64; }).Button;
const __VLS_66 = __VLS_65({ ...{}, label: ("Obtener codigo"), severity: ("info"), outlined: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_64, typeof __VLS_66> & Record<string, unknown>) => void)({ ...{}, label: ("Obtener codigo"), severity: ("info"), outlined: (true), });
const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66)!;
}
{
const __VLS_68 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_69 = __VLS_elementAsFunctionalComponent(__VLS_68);
({} as __VLS_IntrinsicElements).br;
const __VLS_70 = __VLS_69({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_69));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_68, typeof __VLS_70> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70)!;
}
{
const __VLS_72 = ({} as __VLS_IntrinsicElements)["small"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
({} as __VLS_IntrinsicElements).small;
({} as __VLS_IntrinsicElements).small;
const __VLS_74 = __VLS_73({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
(__VLS_75.slots!).default;
}
(__VLS_59.slots!).default;
}
{
const __VLS_76 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
({} as __VLS_IntrinsicElements).br;
const __VLS_78 = __VLS_77({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
}
{
const __VLS_80 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_82 = __VLS_81({ ...{}, class: ("text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, class: ("text-stone-600 font-bold italic text-xs"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
{
let __VLS_84!: 'InputText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputText : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputText'];
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ ...{}, modelValue: ((__VLS_ctx.captcha)), placeholder: ("ingrese lo que se ve en la imagen"), class: ("text-stone-600 font-bold italic text-xs"), }));
({} as { InputText: typeof __VLS_84; }).InputText;
const __VLS_86 = __VLS_85({ ...{}, modelValue: ((__VLS_ctx.captcha)), placeholder: ("ingrese lo que se ve en la imagen"), class: ("text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_84, typeof __VLS_86> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.captcha)), placeholder: ("ingrese lo que se ve en la imagen"), class: ("text-stone-600 font-bold italic text-xs"), });
const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86)!;
}
{
let __VLS_88!: 'VueClientRecaptcha' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VueClientRecaptcha : (typeof __VLS_resolvedLocalAndGlobalComponents)['VueClientRecaptcha'];
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{ onGetCode: {} as any, onIsValid: {} as any, }, value: ((__VLS_ctx.captcha)), }));
({} as { VueClientRecaptcha: typeof __VLS_88; }).VueClientRecaptcha;
const __VLS_90 = __VLS_89({ ...{ onGetCode: {} as any, onIsValid: {} as any, }, value: ((__VLS_ctx.captcha)), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_88, typeof __VLS_90> & Record<string, unknown>) => void)({ ...{ onGetCode: {} as any, onIsValid: {} as any, }, value: ((__VLS_ctx.captcha)), });
const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90)!;
let __VLS_92 = { 'getCode': __VLS_pickEvent(__VLS_91.emit!, 'getCode' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_89, typeof __VLS_90>).onGetCode) };
__VLS_92 = {
getCode: (__VLS_ctx.getCaptchaCode)
};
let __VLS_93 = { 'isValid': __VLS_pickEvent(__VLS_91.emit!, 'isValid' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_89, typeof __VLS_90>).onIsValid) };
__VLS_93 = {
isValid: (__VLS_ctx.checkValidCaptcha)
};
}
(__VLS_83.slots!).default;
}
(__VLS_31.slots!).default;
}
{
const __VLS_94 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_95 = __VLS_elementAsFunctionalComponent(__VLS_94);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_96 = __VLS_95({ ...{}, class: ("w-full sm:w-2/5"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_94, typeof __VLS_96> & Record<string, unknown>) => void)({ ...{}, class: ("w-full sm:w-2/5"), });
const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96)!;
{
const __VLS_98 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_100 = __VLS_99({ ...{}, class: ("p-float-label"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_98, typeof __VLS_100> & Record<string, unknown>) => void)({ ...{}, class: ("p-float-label"), });
const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100)!;
{
let __VLS_102!: 'Password' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Password : (typeof __VLS_resolvedLocalAndGlobalComponents)['Password'];
const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{}, modelValue: ((__VLS_ctx.password)), inputId: ("password"), toggleMask: (true), feedback: ((false)), }));
({} as { Password: typeof __VLS_102; }).Password;
const __VLS_104 = __VLS_103({ ...{}, modelValue: ((__VLS_ctx.password)), inputId: ("password"), toggleMask: (true), feedback: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_104> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.password)), inputId: ("password"), toggleMask: (true), feedback: ((false)), });
const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104)!;
}
{
const __VLS_106 = ({} as __VLS_IntrinsicElements)["label"];
const __VLS_107 = __VLS_elementAsFunctionalComponent(__VLS_106);
({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).label;
const __VLS_108 = __VLS_107({ ...{}, for: ("password"), class: ("text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_106, typeof __VLS_108> & Record<string, unknown>) => void)({ ...{}, for: ("password"), class: ("text-stone-600 font-bold italic text-xs"), });
const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108)!;
(__VLS_109.slots!).default;
}
(__VLS_101.slots!).default;
}
{
const __VLS_110 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
({} as __VLS_IntrinsicElements).br;
const __VLS_112 = __VLS_111({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_110, typeof __VLS_112> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112)!;
}
{
const __VLS_114 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_115 = __VLS_elementAsFunctionalComponent(__VLS_114);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_116 = __VLS_115({ ...{}, class: ("p-float-label"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_114, typeof __VLS_116> & Record<string, unknown>) => void)({ ...{}, class: ("p-float-label"), });
const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116)!;
{
let __VLS_118!: 'Password' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Password : (typeof __VLS_resolvedLocalAndGlobalComponents)['Password'];
const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ ...{}, modelValue: ((__VLS_ctx.passwordCheck)), inputId: ("passwordCheck"), toggleMask: (true), feedback: ((false)), }));
({} as { Password: typeof __VLS_118; }).Password;
const __VLS_120 = __VLS_119({ ...{}, modelValue: ((__VLS_ctx.passwordCheck)), inputId: ("passwordCheck"), toggleMask: (true), feedback: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_118, typeof __VLS_120> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.passwordCheck)), inputId: ("passwordCheck"), toggleMask: (true), feedback: ((false)), });
const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120)!;
}
{
const __VLS_122 = ({} as __VLS_IntrinsicElements)["label"];
const __VLS_123 = __VLS_elementAsFunctionalComponent(__VLS_122);
({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).label;
const __VLS_124 = __VLS_123({ ...{}, for: ("passwordCheck"), class: ("text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_122, typeof __VLS_124> & Record<string, unknown>) => void)({ ...{}, for: ("passwordCheck"), class: ("text-stone-600 font-bold italic text-xs"), });
const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124)!;
(__VLS_125.slots!).default;
}
(__VLS_117.slots!).default;
}
{
const __VLS_126 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_127 = __VLS_elementAsFunctionalComponent(__VLS_126);
({} as __VLS_IntrinsicElements).br;
const __VLS_128 = __VLS_127({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_126, typeof __VLS_128> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128)!;
}
{
const __VLS_130 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_132 = __VLS_131({ ...{}, class: ("p-input-icon-left text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_130, typeof __VLS_132> & Record<string, unknown>) => void)({ ...{}, class: ("p-input-icon-left text-stone-600 font-bold italic text-xs"), });
const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132)!;
{
const __VLS_134 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_135 = __VLS_elementAsFunctionalComponent(__VLS_134);
({} as __VLS_IntrinsicElements).i;
const __VLS_136 = __VLS_135({ ...{}, class: ("pi pi-arrow-right"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_134, typeof __VLS_136> & Record<string, unknown>) => void)({ ...{}, class: ("pi pi-arrow-right"), });
const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136)!;
}
{
let __VLS_138!: 'InputText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputText : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputText'];
const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{}, modelValue: ((__VLS_ctx.invitationCode)), placeholder: ("codigo de invitación"), class: ("text-stone-600 font-bold italic text-xs"), }));
({} as { InputText: typeof __VLS_138; }).InputText;
const __VLS_140 = __VLS_139({ ...{}, modelValue: ((__VLS_ctx.invitationCode)), placeholder: ("codigo de invitación"), class: ("text-stone-600 font-bold italic text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_138, typeof __VLS_140> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.invitationCode)), placeholder: ("codigo de invitación"), class: ("text-stone-600 font-bold italic text-xs"), });
const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140)!;
}
{
const __VLS_142 = ({} as __VLS_IntrinsicElements)["br"];
const __VLS_143 = __VLS_elementAsFunctionalComponent(__VLS_142);
({} as __VLS_IntrinsicElements).br;
const __VLS_144 = __VLS_143({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_143));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_142, typeof __VLS_144> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144)!;
}
{
const __VLS_146 = ({} as __VLS_IntrinsicElements)["small"];
const __VLS_147 = __VLS_elementAsFunctionalComponent(__VLS_146);
({} as __VLS_IntrinsicElements).small;
({} as __VLS_IntrinsicElements).small;
const __VLS_148 = __VLS_147({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_147));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_146, typeof __VLS_148> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148)!;
(__VLS_149.slots!).default;
}
(__VLS_133.slots!).default;
}
(__VLS_97.slots!).default;
}
(__VLS_27.slots!).default;
}
{
let __VLS_150!: 'Divider' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Divider : 'divider' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.divider : (typeof __VLS_resolvedLocalAndGlobalComponents)['divider'];
const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ ...{}, }));
({} as { divider: typeof __VLS_150; }).divider;
const __VLS_152 = __VLS_151({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_150, typeof __VLS_152> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
}
{
const __VLS_154 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_155 = __VLS_elementAsFunctionalComponent(__VLS_154);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_156 = __VLS_155({ ...{}, class: ("grid gap-4 grid-cols-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_154, typeof __VLS_156> & Record<string, unknown>) => void)({ ...{}, class: ("grid gap-4 grid-cols-2"), });
const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156)!;
{
let __VLS_158!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ ...{}, label: ("Ingresar"), text: (true), raised: (true), rounded: (true), }));
({} as { Button: typeof __VLS_158; }).Button;
const __VLS_160 = __VLS_159({ ...{}, label: ("Ingresar"), text: (true), raised: (true), rounded: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_158, typeof __VLS_160> & Record<string, unknown>) => void)({ ...{}, label: ("Ingresar"), text: (true), raised: (true), rounded: (true), });
const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160)!;
}
{
let __VLS_162!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ ...{}, label: ("registrarse"), severity: ("secondary"), rounded: (true), text: (true), raised: (true), }));
({} as { Button: typeof __VLS_162; }).Button;
const __VLS_164 = __VLS_163({ ...{}, label: ("registrarse"), severity: ("secondary"), rounded: (true), text: (true), raised: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_162, typeof __VLS_164> & Record<string, unknown>) => void)({ ...{}, label: ("registrarse"), severity: ("secondary"), rounded: (true), text: (true), raised: (true), });
const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164)!;
}
(__VLS_157.slots!).default;
}
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["container"];
__VLS_styleScopedClasses["mx-auto"];
__VLS_styleScopedClasses["px-4"];
__VLS_styleScopedClasses["md:px-20"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["pi"];
__VLS_styleScopedClasses["pi-users"];
__VLS_styleScopedClasses["mr-2"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["text-lg"];
__VLS_styleScopedClasses["m-0"];
__VLS_styleScopedClasses["text-cyan-900"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-between"];
__VLS_styleScopedClasses["flex-col"];
__VLS_styleScopedClasses["sm:flex-row"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["sm:w-3/6"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["w-4/6"];
__VLS_styleScopedClasses["lg:w-5/12"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["sm:w-2/5"];
__VLS_styleScopedClasses["p-float-label"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["p-float-label"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["p-input-icon-left"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["pi"];
__VLS_styleScopedClasses["pi-arrow-right"];
__VLS_styleScopedClasses["text-stone-600"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["italic"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["grid"];
__VLS_styleScopedClasses["gap-4"];
__VLS_styleScopedClasses["grid-cols-2"];
}
var __VLS_slots!: {};
// @ts-ignore
[login, codigoPais, paises, codigoPais, paises, codigoPais, paises, phone, phone, phone, phoneCode, phoneCode, phoneCode, captcha, captcha, captcha, captcha, captcha, captcha, getCaptchaCode, checkValidCaptcha, password, password, password, passwordCheck, passwordCheck, passwordCheck, invitationCode, invitationCode, invitationCode,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
return {} as typeof __VLS_publicComponent;
})();
