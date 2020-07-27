import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpClientJsonpModule, HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// editor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// pipe
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import {FilterPipe} from './pipes/filter.pipe';


// Paginas y Compoenentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SpecialsComponent } from './pages/specials/specials.component';
import { GalleryComponent } from './pages/gallery/gallery.component';


// menus
import { MenufibroblastComponent } from './components/menus/menufibroblast/menufibroblast.component';
import { MenubodyComponent } from './components/menus/menubody/menubody.component';
import { MenufacialComponent } from './components/menus/menufacial/menufacial.component';
import { MenumakeupComponent } from './components/menus/menumakeup/menumakeup.component';
import { MenubookingBodyComponent } from './components/menus/menubooking-body/menubooking-body.component';
import { MenubookingFacialComponent } from './components/menus/menubooking-facial/menubooking-facial.component';
import { MenubookingMakeupComponent } from './components/menus/menubooking-makeup/menubooking-makeup.component';
import { MenubookingFibroblastComponent } from './components/menus/menubooking-fibroblast/menubooking-fibroblast.component';

// Tratamientos
import { WaxComponent } from './pages/servicios/wax/wax.component';
import { FibroblastFaceComponent } from './pages/servicios/fibroblast-face/fibroblast-face.component';
import { FibroblastBodyComponent } from './pages/servicios/fibroblast-body/fibroblast-body.component';
import { FibroblastHypertrophicComponent } from './pages/servicios/fibroblast-hypertrophic/fibroblast-hypertrophic.component';
import { FibroblastComponent } from './pages/servicios/fibroblast/fibroblast.component';
import { MakeupComponent } from './pages/servicios/makeup/makeup.component';
import { MakeupBridalComponent } from './pages/servicios/makeup-bridal/makeup-bridal.component';
import { MakeupClasesComponent } from './pages/servicios/makeup-clases/makeup-clases.component';
import { MakeupLookComponent } from './pages/servicios/makeup-look/makeup-look.component';
import { PermanentMakeupComponent } from './pages/servicios/permanent-makeup/permanent-makeup.component';
import { SpecialTreatmentComponent } from './pages/servicios/special-treatment/special-treatment.component';
import { BodyHandsComponent } from './pages/servicios/body-hands/body-hands.component';
import { BodySculptingComponent } from './pages/servicios/body-sculpting/body-sculpting.component';
import { BodyWrappingComponent } from './pages/servicios/body-wrapping/body-wrapping.component';
import { FacialComponent } from './pages/servicios/facial/facial.component';
import { BodyComponent } from './pages/servicios/body/body.component';
import { FacialAntiageComponent } from './pages/servicios/facial-antiage/facial-antiage.component';
import { FacialBrighteningComponent } from './pages/servicios/facial-brightening/facial-brightening.component';
import { FacialCalmingComponent } from './pages/servicios/facial-calming/facial-calming.component';
import { FacialLuxuryComponent } from './pages/servicios/facial-luxury/facial-luxury.component';
import { FacialRestorativeComponent } from './pages/servicios/facial-restorative/facial-restorative.component';
import { FacialSpecialComponent } from './pages/servicios/facial-special/facial-special.component';

// Modales
import { BannerComponent } from './components/banner/banner.component';
import { EmergenteComponent } from './components/modales/emergente/emergente.component';

import { BioComponent } from './components/modales/bio/bio.component';
import { WaxmodalComponent } from './components/modales/waxmodal/waxmodal.component';

import { FibrofacemodalComponent } from './components/modales/fibrofacemodal/fibrofacemodal.component';
import { FacialAModalComponent } from './components/modales/facial-a-modal/facial-a-modal.component';
import { FacialBModalComponent } from './components/modales/facial-b-modal/facial-b-modal.component';
import { FacialCModalComponent } from './components/modales/facial-c-modal/facial-c-modal.component';
import { FacialLModalComponent } from './components/modales/facial-l-modal/facial-l-modal.component';
import { FacialRModalComponent } from './components/modales/facial-r-modal/facial-r-modal.component';
import { FacialSTModalComponent } from './components/modales/facial-st-modal/facial-st-modal.component';
import { FibroblastHModalComponent } from './components/modales/fibroblast-h-modal/fibroblast-h-modal.component';
import { FibroblastBModalComponent } from './components/modales/fibroblast-b-modal/fibroblast-b-modal.component';
import { MakeupBModalComponent } from './components/modales/makeup-b-modal/makeup-b-modal.component';
import { MakeupCModalComponent } from './components/modales/makeup-c-modal/makeup-c-modal.component';
import { MakeupLModalComponent } from './components/modales/makeup-l-modal/makeup-l-modal.component';
import { PermanentModalComponent } from './components/modales/permanent-modal/permanent-modal.component';
import { BodyHModalComponent } from './components/modales/body-h-modal/body-h-modal.component';
import { BodySModalComponent } from './components/modales/body-s-modal/body-s-modal.component';
import { BodyWModalComponent } from './components/modales/body-w-modal/body-w-modal.component';
import { SpecialModalComponent } from './components/modales/special-modal/special-modal.component';
import { RegistroComponent } from './components/modales/registro/registro.component';

// Booking
import { BookingComponent } from './pages/booking/booking/booking.component';
import { BookingBodyComponent } from './pages/booking/booking-body/booking-body.component';
import { BookingFacialComponent } from './pages/booking/booking-facial/booking-facial.component';
import { BookingFibroblastComponent } from './pages/booking/booking-fibroblast/booking-fibroblast.component';
import { BookingMakeupComponent } from './pages/booking/booking-makeup/booking-makeup.component';
import { BookingSpecialTComponent } from './pages/booking/booking-special-t/booking-special-t.component';
import { BookingPermanentComponent } from './pages/booking/booking-permanent/booking-permanent.component';
import { BookingWaxComponent } from './pages/booking/booking-wax/booking-wax.component';
import { BookingBodyHComponent } from './pages/booking/booking-body-h/booking-body-h.component';
import { BookingBodySComponent } from './pages/booking/booking-body-s/booking-body-s.component';
import { BookingBodyWComponent } from './pages/booking/booking-body-w/booking-body-w.component';
import { BookingFacialAComponent } from './pages/booking/booking-facial-a/booking-facial-a.component';
import { BookingFacialRComponent } from './pages/booking/booking-facial-r/booking-facial-r.component';
import { BookingFacialBComponent } from './pages/booking/booking-facial-b/booking-facial-b.component';
import { BookingFacialCComponent } from './pages/booking/booking-facial-c/booking-facial-c.component';
import { BookingFacialSComponent } from './pages/booking/booking-facial-s/booking-facial-s.component';
import { BookingFacialLComponent } from './pages/booking/booking-facial-l/booking-facial-l.component';
import { BookingMakeupLComponent } from './pages/booking/booking-makeup-l/booking-makeup-l.component';
import { BookingMakeupBComponent } from './pages/booking/booking-makeup-b/booking-makeup-b.component';
import { BookingMakeupCComponent } from './pages/booking/booking-makeup-c/booking-makeup-c.component';
import { BookingFibroblastFComponent } from './pages/booking/booking-fibroblast-f/booking-fibroblast-f.component';
import { BookingFibroblastBComponent } from './pages/booking/booking-fibroblast-b/booking-fibroblast-b.component';
import { BookingFibroblastHComponent } from './pages/booking/booking-fibroblast-h/booking-fibroblast-h.component';



// Contacto y Registro
import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';
import { RegistrosComponent } from './cmspage/registros/registros.component';
import { TranslationComponent } from './translation/translation.component';
import { ResultadosComponent } from './resultados/resultados.component';

// paginas info
import { WaxinfoComponent } from './pages/waxinfo/waxinfo.component';
import { FinancingComponent } from './pages/financing/financing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { KeysPipe } from './pipes/keys.pipe';

// paginacion
import {NgxPaginationModule} from 'ngx-pagination';
import { HairComponent } from './pages/servicios/hair/hair.component';
import { NailsComponent } from './pages/servicios/nails/nails.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { GifcardComponent } from './pages/gifcard/gifcard.component';
import { LocationComponent } from './pages/location/location.component';
import { KeyValue, KeyValuePipe } from './pipes/keyvalue.pipe';
import { ContactComponent } from './pages/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SpecialsComponent,
    GalleryComponent,
    BookingComponent,
    MenufibroblastComponent,
    BannerComponent,
    EmergenteComponent,
    BioComponent,
    WaxComponent,
    WaxmodalComponent,
    FibroblastFaceComponent,
    FibrofacemodalComponent,
    ContactFormComponent,
    FibroblastBodyComponent,
    FibroblastHypertrophicComponent,
    FibroblastComponent,
    MakeupComponent,
    MakeupBridalComponent,
    MakeupClasesComponent,
    MakeupLookComponent,
    PermanentMakeupComponent,
    SpecialTreatmentComponent,
    BodyHandsComponent,
    BodySculptingComponent,
    BodyWrappingComponent,
    FacialComponent,
    BodyComponent,
    FacialAntiageComponent,
    FacialBrighteningComponent,
    FacialCalmingComponent,
    FacialLuxuryComponent,
    FacialRestorativeComponent,
    FacialSpecialComponent,
    MenubodyComponent,
    MenufacialComponent,
    MenumakeupComponent,
    MenubookingBodyComponent,
    MenubookingFacialComponent,
    MenubookingMakeupComponent,
    MenubookingFibroblastComponent,
    BookingBodyComponent,
    BookingFacialComponent,
    BookingFibroblastComponent,
    BookingMakeupComponent,
    BookingSpecialTComponent,
    BookingPermanentComponent,
    BookingWaxComponent,
    FacialAModalComponent,
    FacialBModalComponent,
    FacialCModalComponent,
    FacialLModalComponent,
    FacialRModalComponent,
    FacialSTModalComponent,
    FibroblastHModalComponent,
    FibroblastBModalComponent,
    MakeupBModalComponent,
    MakeupCModalComponent,
    MakeupLModalComponent,
    PermanentModalComponent,
    BodyHModalComponent,
    BodySModalComponent,
    BodyWModalComponent,
    SpecialModalComponent,
    BookingBodyHComponent,
    BookingBodySComponent,
    BookingBodyWComponent,
    BookingFacialAComponent,
    BookingFacialRComponent,
    BookingFacialBComponent,
    BookingFacialCComponent,
    BookingFacialSComponent,
    BookingFacialLComponent,
    BookingMakeupLComponent,
    BookingMakeupBComponent,
    BookingMakeupCComponent,
    BookingFibroblastFComponent,
    BookingFibroblastBComponent,
    BookingFibroblastHComponent,
    RegistrosComponent,
    EscapeHtmlPipe,
    TranslationComponent,
    ResultadosComponent,
    WaxinfoComponent,
    FinancingComponent,
    NotFoundComponent,
    FilterPipe,
    KeysPipe,
    HairComponent,
    NailsComponent,
    MembershipComponent,
    FranchiseComponent,
    GifcardComponent,
    LocationComponent,
    KeyValuePipe,
    ContactComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    HttpClientJsonpModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
