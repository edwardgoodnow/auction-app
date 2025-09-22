import { View, Text } from 'react-native';

export default function SearchForm() {
    return (
        <>
        <div className="search-auctions-large withMapSearch d-none">
            <form acceptCharset="utf-8" id="searchForm" name="searchform" method="post" className="inited">
            <input type="hidden" name="pgno" id="pgno" defaultValue="1" />
            <input type="hidden" name="store_id" id="store_id" defaultValue="" />
            <input type="hidden" name="gallery" id="gallery" defaultValue="" />
            <input type="hidden" name="language" id="language" defaultValue="e" />
            <input type="hidden" name="lang" id="lang" defaultValue="us" />
            <input type="hidden" id="category" name="category" defaultValue="" />
            <input type="hidden" id="pid" name="pid" defaultValue="" />
            <input id="searchcat" defaultValue="" name="searchcat" type="hidden" />
            <div className="row no-gutters mx-0">
                <div className="col-md-1">
                    <div id="search-options" className="d-inline-block dropdown">
                        <a className="text w-100 dropdown-toggle" id="search_category_title"></a>
                        <ul className="list-unstyled text-left dropdown-menu" id="navbarSupportedContentSearch"></ul>
                    </div>
                </div>
                <div className="col-md-10 form-group location_search_box">
                    <input type="text" id="searchtext" className="txt defaultText  defaultTextActive form-control d-inline-block " name="searchtext" placeholder="Search" defaultValue="" autoComplete="off" aria-label="Search" aria-describedby="qbSearchButtonHolder" />
                        <div id="location_search_inner">
                            <input type="text" id="smap_search" className="txt defaultText defaultTextActive form-control d-inline-block started" name="map_search" placeholder="Location" />
                            <span className="search_results"></span>
                        </div>
                    <span className=" input-group-text cursor-pointer" id="qbSearchButtonHolder">
                        <input id="qbSearchButton" type="submit" defaultValue="" />
                    </span>
                </div>
            </div>
            </form>
        </div>
        </>
    );
}
