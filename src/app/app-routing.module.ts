import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, GalleryComponent, SpecialsComponent,
  WaxComponent,
  BodyComponent, BodyHandsComponent, BodySculptingComponent, BodyWrappingComponent,
  FacialComponent, FacialAntiageComponent, FacialBrighteningComponent, FacialCalmingComponent,
  FacialLuxuryComponent, FacialSpecialComponent, FacialRestorativeComponent,
  FibroblastComponent, FibroblastHypertrophicComponent, FibroblastFaceComponent, FibroblastBodyComponent,
  MakeupComponent, MakeupLookComponent, MakeupBridalComponent, MakeupClasesComponent,
  PermanentMakeupComponent, SpecialTreatmentComponent,
  BookingComponent, BookingBodyComponent, BookingFacialComponent, BookingFibroblastComponent,
  BookingMakeupComponent, BookingPermanentComponent, BookingSpecialTComponent, BookingWaxComponent,
  BookingBodyHComponent, BookingBodySComponent, BookingBodyWComponent, BookingFacialAComponent,
  BookingFacialBComponent, BookingFacialCComponent, BookingFacialLComponent, BookingFacialRComponent,
  BookingFacialSComponent, BookingFibroblastBComponent, BookingFibroblastFComponent, BookingFibroblastHComponent,
  BookingMakeupBComponent, BookingMakeupCComponent, BookingMakeupLComponent, FinancingComponent} from './pages/index.paginas';

import { ContactFormComponent} from './cmspage/contact-form/contact-form.component';

import { ResultadosComponent} from './resultados/resultados.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'wax', component: WaxComponent},
  // Facial
  {path: 'facial', component: FacialComponent},
  {path: 'facial-anti-aging-treatment', component: FacialAntiageComponent},
  {path: 'facial-brigthening-and-clearing-facial-peel', component: FacialBrighteningComponent},
  {path: 'facial-calming-treatment', component: FacialCalmingComponent},
  {path: 'facial-luxury-treatments', component: FacialLuxuryComponent},
  {path: 'facial-special-treatments', component: FacialSpecialComponent},
  {path: 'facial-restorative-facial-treatments', component: FacialRestorativeComponent},
  // Body
  {path: 'body', component: BodyComponent},
  {path: 'body-hands-and-legs', component: BodyHandsComponent},
  {path: 'body-sculpting', component: BodySculptingComponent},
  {path: 'body-wrapping', component: BodyWrappingComponent},
  // Fibroblast
  {path: 'fibroblast', component: FibroblastComponent},
  {path: 'fibroblast-face', component: FibroblastFaceComponent},
  {path: 'fibroblast-body', component: FibroblastBodyComponent},
  {path: 'fibroblast-hypertrophic-atrophic-scars', component: FibroblastHypertrophicComponent},
  // Makeup
  {path: 'makeup', component: MakeupComponent},
  {path: 'makeup-looks', component: MakeupLookComponent},
  {path: 'makeup-bridal-looks', component: MakeupBridalComponent},
  {path: 'makeup-classes', component: MakeupClasesComponent},
  {path: 'permanent-makeup', component: PermanentMakeupComponent},
  {path: 'special-treatments', component: SpecialTreatmentComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'specials', component: SpecialsComponent},
  {path: 'contact', component: ContactFormComponent},
  // booking
  {path: 'booking', component: BookingComponent},
  {path: 'booking-body', component: BookingBodyComponent},
  {path: 'booking-facial', component: BookingFacialComponent},
  {path: 'booking-fibroblast', component: BookingFibroblastComponent},
  {path: 'booking-makeup', component: BookingMakeupComponent},
  {path: 'booking-permanent-makeup', component: BookingPermanentComponent},
  {path: 'booking-special-treatments', component: BookingSpecialTComponent},
  {path: 'booking-wax', component: BookingWaxComponent},
  {path: 'booking-body-hands-and-legs', component: BookingBodyHComponent},
  {path: 'booking-body-sculpting', component: BookingBodySComponent},
  {path: 'booking-body-wrapping', component: BookingBodyWComponent},
  {path: 'booking-facial-anti-aging-treatment', component: BookingFacialAComponent},
  {path: 'booking-facial-brigthening-and-clearing-facial-peel', component: BookingFacialBComponent},
  {path: 'booking-facial-calming-treatment', component: BookingFacialCComponent},
  {path: 'booking-facial-luxury-treatments', component: BookingFacialLComponent},
  {path: 'booking-facial-restorative-facial-treatments', component: BookingFacialRComponent},
  {path: 'booking-facial-special-treatments', component: BookingFacialSComponent},
  {path: 'booking-fibroblast-body', component: BookingFibroblastBComponent},
  {path: 'booking-fibroblast-face', component: BookingFibroblastFComponent},
  {path: 'booking-fibroblast-hypertrophic-atrophic-scars', component: BookingFibroblastHComponent},
  {path: 'booking-makeup-bridal-looks', component: BookingMakeupBComponent},
  {path: 'booking-makeup-classes', component: BookingMakeupCComponent},
  {path: 'booking-makeup-looks', component: BookingMakeupLComponent},

  {path: 'financing', component: FinancingComponent},
  {path: 'buscar', component: ResultadosComponent},
  {path: 'buscar/:termino', component: ResultadosComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
