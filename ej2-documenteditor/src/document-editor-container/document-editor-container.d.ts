import { Component, INotifyPropertyChanged, ModuleDeclaration, L10n } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { Toolbar } from './tool-bar/tool-bar';
import { DocumentEditorContainerModel } from './document-editor-container-model';
import { DocumentEditor } from '../document-editor/document-editor';
import { HeaderFooterProperties } from './properties-pane/header-footer-pane';
import { ImageProperties } from './properties-pane/image-properties-pane';
import { TocProperties } from './properties-pane/table-of-content-pane';
import { TableProperties } from './properties-pane/table-properties-pane';
import { StatusBar } from './properties-pane/status-bar';
import { ContainerContentChangeEventArgs, ContainerSelectionChangeEventArgs, ContainerDocumentChangeEventArgs, CustomContentMenuEventArgs, BeforeOpenCloseCustomContentMenuEventArgs, BeforePaneSwitchEventArgs, LayoutType, CommentDeleteEventArgs, ServiceFailureArgs, CommentActionEventArgs, XmlHttpRequestEventArgs } from '../document-editor/base';
import { ContainerServerActionSettingsModel, DocumentEditorSettingsModel, DocumentSettingsModel } from '../document-editor/document-editor-model';
import { CharacterFormatProperties, ParagraphFormatProperties, SectionFormatProperties } from '../document-editor/implementation';
import { ToolbarItem } from '../document-editor/base/types';
import { CustomToolbarItemModel, TrackChangeEventArgs } from '../document-editor/base/events-helper';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
/**
 * Document Editor container component.
 */
export declare class DocumentEditorContainer extends Component<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Show or hide properties pane.
     *
     * @default true
     */
    showPropertiesPane: boolean;
    /**
     * Enable or disable toolbar in document editor container.
     *
     * @default true
     */
    enableToolbar: boolean;
    /**
     * Restrict editing operation.
     *
     * @default false
     */
    restrictEditing: boolean;
    /**
     * Enable or disable spell checker in document editor container.
     *
     * @default false
     */
    enableSpellCheck: boolean;
    /**
     * Enable or disable track changes in document editor container.
     *
     * @default false
     */
    enableTrackChanges: boolean;
    /**
     * Layout Type
     *
     * @default Pages
     */
    layoutType: LayoutType;
    /**
     * Gets or sets the current user.
     *
     * @default ''
     */
    currentUser: string;
    /**
     * Gets or sets the color used for highlighting the editable ranges or regions of the `currentUser` in Document Editor. The default value is "#FFFF00".
     * > If the visibility of text affected due this highlight color matching with random color applied for the track changes, then modify the color value of this property to resolve text visibility problem.
     *
     * @default '#FFFF00'
     */
    userColor: string;
    /**
     * Enable local paste
     *
     * @default false
     */
    enableLocalPaste: boolean;
    /**
     * Sfdt service URL.
     *
     * @default ''
     */
    serviceUrl: string;
    /**
     * Specifies the z-order for rendering that determines whether the dialog is displayed in front or behind of another component.
     *
     * @default 2000
     * @aspType int
     */
    zIndex: number;
    /**
     * Enable rendering with strict Content Security policy.
     */
    enableCsp: boolean;
    /**
     * Gets or set a value indicating whether comment is enabled or not
     *
     * @default true
     */
    enableComment: boolean;
    /**
     * Defines the width of the DocumentEditorContainer component
     *
     * @default '100%'
     */
    width: string;
    /**
     * Defines the height of the DocumentEditorContainer component
     *
     * @default '320px'
     */
    height: string;
    /**
     * Enable partial lock and edit module.
     *
     * @default false
     */
    enableLockAndEdit: boolean;
    /**
     * Triggers when the component is created
     *
     * @event created
     */
    created: EmitType<Object>;
    /**
     * Triggers when the component is destroyed.
     *
     * @event destroyed
     */
    destroyed: EmitType<Object>;
    /**
     * Triggers whenever the content changes in the document editor container.
     *
     * @event contentChange
     */
    contentChange: EmitType<ContainerContentChangeEventArgs>;
    /**
     * Triggers whenever selection changes in the document editor container.
     *
     * @event selectionChange
     */
    selectionChange: EmitType<ContainerSelectionChangeEventArgs>;
    /**
     * Triggers whenever document changes in the document editor container.
     *
     * @event documentChange
     */
    documentChange: EmitType<ContainerDocumentChangeEventArgs>;
    /**
     * Triggers when toolbar item is clicked.
     *
     * @event toolbarClick
     */
    toolbarClick: EmitType<ClickEventArgs>;
    /**
     * Triggers while selecting the custom context-menu option.
     *
     * @event customContextMenuSelect
     */
    customContextMenuSelect: EmitType<CustomContentMenuEventArgs>;
    /**
     * Triggers before opening the custom context-menu option.
     *
     * @event customContextMenuBeforeOpen
     */
    customContextMenuBeforeOpen: EmitType<BeforeOpenCloseCustomContentMenuEventArgs>;
    /**
     * Trigger before switching panes in DocumentEditor.
     *
     * @event beforePaneSwitch
     */
    beforePaneSwitch: EmitType<BeforePaneSwitchEventArgs>;
    /**
     * Triggers on deleting a comment.
     *
     * @event commentDelete
     */
    commentDelete: EmitType<CommentDeleteEventArgs>;
    /**
     * Triggers on comment actions(Post, edit, reply, resolve, reopen).
     *
     * @event beforeCommentAction
     */
    beforeCommentAction: EmitType<CommentActionEventArgs>;
    /**
     * Triggers when the server action fails.
     *
     * @event serviceFailure
     */
    serviceFailure: EmitType<ServiceFailureArgs>;
    /**
     * Triggers Keyboard shortcut of TrackChanges.
     *
     * @event trackChange
     */
    trackChange: EmitType<TrackChangeEventArgs>;
    /**
     * Triggers when user interaction prevented in content control.
     *
     * @event contentControl
     */
    contentControl: EmitType<Object>;
    /**
     * This event is triggered before a server request is started, allows you to modify the XMLHttpRequest object (setting additional headers, if needed).
     */
    beforeXmlHttpRequestSend: EmitType<XmlHttpRequestEventArgs>;
    /**
     * Document editor container's toolbar module
     *
     * @private
     */
    toolbarModule: Toolbar;
    /**
     * @private
     */
    localObj: L10n;
    /**
     * Document Editor instance
     */
    private documentEditorInternal;
    /**
     * @private
     */
    toolbarContainer: HTMLElement;
    /**
     * @private
     */
    editorContainer: HTMLElement;
    /**
     * @private
     */
    propertiesPaneContainer: HTMLElement;
    /**
     * @private
     */
    statusBarElement: HTMLElement;
    /**
     * Header footer Properties
     *
     * @private
     */
    headerFooterProperties: HeaderFooterProperties;
    /**
     * Image Properties Pane
     *
     * @private
     */
    imageProperties: ImageProperties;
    /**
     * @private
     */
    tocProperties: TocProperties;
    /**
     * @private
     */
    tableProperties: TableProperties;
    /**
     * @private
     */
    statusBar: StatusBar;
    /**
     * @private
     */
    containerTarget: HTMLElement;
    /**
     * @private
     */
    previousContext: string;
    /**
     * @private
     */
    characterFormat: CharacterFormatProperties;
    /**
     * @private
     */
    paragraphFormat: ParagraphFormatProperties;
    /**
     * @private
     */
    sectionFormat: SectionFormatProperties;
    /**
     * @private
     */
    showHeaderProperties: boolean;
    /**
     * Defines the settings for DocumentEditor customization.
     *
     * @default {}
     */
    documentEditorSettings: DocumentEditorSettingsModel;
    /**
    * Gets the settings and properties of the document that is opened in Document editor component.
    *
    * @default {}
    */
    documentSettings: DocumentSettingsModel;
    /**
     * Defines the settings of the DocumentEditorContainer service.
     */
    serverActionSettings: ContainerServerActionSettingsModel;
    /**
     * Defines toolbar items for DocumentEditorContainer.
     *
     * @default ['New','Open','Separator','Undo','Redo','Separator','Image','Table','Hyperlink','Bookmark','TableOfContents','Separator','Header','Footer','PageSetup','PageNumber','Break','InsertFootnote','InsertEndnote','Separator','Find','Separator','Comments','TrackChanges','LocalClipboard','RestrictEditing','Separator','FormFields','UpdateFields']
     */
    toolbarItems: (CustomToolbarItemModel | ToolbarItem)[];
    /**
     * Add custom headers to XMLHttpRequest.
     *
     * @default []
     */
    headers: object[];
    /**
     * Gets DocumentEditor instance.
     *
     * @aspType DocumentEditor
     * @returns {DocumentEditor} - Returns the DocumentEditor instance.
     */
    readonly documentEditor: DocumentEditor;
    /**
     * Gets toolbar instance.
     *
     * @returns {Toolbar} - Returns toolbar module.
     */
    readonly toolbar: Toolbar;
    /**
     * Initialize the constructor of DocumentEditorContainer
     *
     * @param { DocumentEditorContainerModel } options - Specified DocumentEditorContainer model as options.
     * @param { string | HTMLElement }element - Specifies the element that is rendered as a DocumentEditorContainer.
     */
    constructor(options?: DocumentEditorContainerModel, element?: string | HTMLElement);
    /**
     * default locale
     *
     * @private
     */
    defaultLocale: Object;
    getModuleName(): string;
    /**
     * @private
     */
    onPropertyChanged(newModel: DocumentEditorContainerModel, oldModel: DocumentEditorContainerModel): void;
    /**
     * @private
     */
    protected preRender(): void;
    /**
     * @private
     */
    protected render(): void;
    private restrictEditingToggleHelper;
    private setFormat;
    private setserverActionSettings;
    private customizeDocumentEditorSettings;
    /**
     * @private
     */
    getPersistData(): string;
    protected requiredModules(): ModuleDeclaration[];
    private initContainerElement;
    private createToolbarContainer;
    private initializeDocumentEditor;
    private wireEvents;
    private unWireEvents;
    private onCommentBegin;
    private onCommentEnd;
    private beforeXmlHttpSend;
    private onCommentDelete;
    private onCommentAction;
    private onTrackChange;
    private onBeforePaneSwitch;
    /**
     * @private
     */
    private fireServiceFailure;
    /**
     * @private
     */
    showHidePropertiesPane(show: boolean): void;
    /**
     * Resizes the container component and its sub elements based on given size or client size.
     * @param width
     * @param height
     */
    resize(width?: number, height?: number): void;
    /**
     * @private
     */
    onContentChange(): void;
    /**
     * @private
     */
    onDocumentChange(): void;
    /**
     * @private
     */
    onSelectionChange(): void;
    /**
     * @private
     */
    private onZoomFactorChange;
    /**
     * @private
     */
    private onRequestNavigate;
    /**
     * @private
     */
    private onViewChange;
    /**
     * @private
     */
    private onCustomContextMenuSelect;
    /**
     * @private
     */
    private onCustomContextMenuBeforeOpen;
    /**
     * @private
     */
    showPropertiesPaneOnSelection(): void;
    /**
     * @private
     * @param property
     */
    showProperties(property: string): void;
    /**
     * Set the default character format for document editor container
     * @param characterFormat
     */
    setDefaultCharacterFormat(characterFormat: CharacterFormatProperties): void;
    /**
     * Set the default paragraph format for document editor container
     * @param paragraphFormat
     */
    setDefaultParagraphFormat(paragraphFormat: ParagraphFormatProperties): void;
    /**
     * Set the default section format for document editor container
     * @param sectionFormat
     */
    setDefaultSectionFormat(sectionFormat: SectionFormatProperties): void;
    /**
     * Destroys all managed resources used by this object.
     */
    destroy(): void;
}
