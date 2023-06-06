import { PdfViewer, PdfViewerBase } from '../index';
import { DocumentTextCollectionSettingsModel } from '../pdfviewer-model';
/**
 * TextSearch module
 */
export declare class TextSearch {
    /**
     * @private
     */
    isTextSearch: boolean;
    /**
     * @private
     */
    searchBtn: HTMLElement;
    /**
     * @private
     */
    searchInput: HTMLElement;
    /**
     * @private
     */
    searchCount: number;
    private pdfViewer;
    private pdfViewerBase;
    private searchBox;
    private nextSearchBtn;
    private prevSearchBtn;
    private searchIndex;
    private currentSearchIndex;
    private startIndex;
    private searchPageIndex;
    private searchString;
    private isMatchCase;
    private searchRequestHandler;
    private textContents;
    private searchMatches;
    private searchCollection;
    private searchedPages;
    private isPrevSearch;
    private tempElementStorage;
    /**
     * @private
     */
    isMessagePopupOpened: boolean;
    /**
     * @private
     */
    documentTextCollection: DocumentTextCollectionSettingsModel[][];
    /**
     * @private
     */
    isTextRetrieved: boolean;
    private isTextSearched;
    private isTextSearchEventTriggered;
    private isSearchText;
    /**
     * @param pdfViewer
     * @param pdfViewerBase
     * @param pdfViewer
     * @param pdfViewerBase
     * @private
     */
    constructor(pdfViewer: PdfViewer, pdfViewerBase: PdfViewerBase);
    /**
     * @private
     */
    createTextSearchBox(): void;
    private setLoaderProperties;
    private showLoadingIndicator;
    /**
     * @private
     */
    textSearchBoxOnResize(): void;
    /**
     * @param isShow
     * @private
     */
    showSearchBox(isShow: boolean): void;
    /**
     * @private
     */
    searchAfterSelection(): void;
    private initiateTextSearch;
    /**
     * @param inputString
     * @private
     */
    initiateSearch(inputString: string): void;
    private textSearch;
    private nextSearch;
    private prevSearch;
    private initSearch;
    private getPossibleMatches;
    private correctLinetext;
    private getSearchTextContent;
    private getSearchPage;
    private highlightSearchedTexts;
    private addDivForSearch;
    private addDivElement;
    private createSearchTextDiv;
    private calculateBounds;
    private isClassAvailable;
    private getScrollElement;
    private scrollToSearchStr;
    /**
     * @param pageIndex
     * @private
     */
    resizeSearchElements(pageIndex: number): void;
    /**
     * @param pageNumber
     * @private
     */
    highlightOtherOccurrences(pageNumber: number): void;
    private highlightOthers;
    /**
     * @private
     */
    clearAllOccurrences(): void;
    /**
     * @private
     */
    getIndexes(): any;
    private applyTextSelection;
    /**
     * @private
     */
    resetTextSearch(): void;
    private onTextSearchClose;
    private createRequestForSearch;
    /**
     * @private
     */
    getPDFDocumentTexts(): void;
    /**
     * @param startIndex
     * @param endIndex
     * @private
     */
    createRequestForGetPdfTexts(startIndex: number, endIndex: number): void;
    private orderPdfTextCollections;
    private createSearchBoxButtons;
    private enablePrevButton;
    private enableNextButton;
    private checkBoxOnChange;
    /**
     * @private
     */
    resetVariables(): void;
    private searchKeypressHandler;
    private searchClickHandler;
    /**
     * @param element
     * @param inputElement
     * @private
     */
    searchButtonClick(element: HTMLElement, inputElement: HTMLElement): void;
    private updateSearchInputIcon;
    private nextButtonOnClick;
    private prevButtonOnClick;
    private onMessageBoxOpen;
    /**
     * Searches the target text in the PDF document and highlights the occurrences in the pages
     *
     * @param  {string} searchText - Specifies the searchText content
     * @param  {boolean} isMatchCase - If set true , its highlights the MatchCase content
     * @returns void
     */
    searchText(searchText: string, isMatchCase: boolean): void;
    /**
     * Searches the next occurrence of the searched text from the current occurrence of the PdfViewer.
     *
     * @returns void
     */
    searchNext(): void;
    /**
     * Searches the previous occurrence of the searched text from the current occurrence of the PdfViewer.
     *
     * @returns void
     */
    searchPrevious(): void;
    /**
     * Cancels the text search of the PdfViewer.
     *
     * @returns void
     */
    cancelTextSearch(): void;
    /**
     * @private
     */
    destroy(): void;
    /**
     * @private
     */
    getModuleName(): string;
}
